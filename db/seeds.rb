require 'csv'
# AlbumsSave.destroy_all
# ArtistsFollower.destroy_all
# PlaylistsFollower.destroy_all
# SongSave.destroy_all


Playlist.destroy_all
PlaylistsSong.destroy_all
Artist.destroy_all
Album.destroy_all
FolloweesFollower.destroy_all
Song.destroy_all
User.destroy_all

unless File.exist?("./db/songSeeds.csv")
  load './db/createSongSeeds.rb'
end

Faker::UniqueGenerator.clear

######################################################################
# Generates a fake set of users based off of some of the developer's #
# favorite shows and movies!                                         #
######################################################################
User.create(username: 'DotifyGuest', email: 'DotifyGuest@dotify.io', password: 'examplePassword4')
######################################################################
for i in (0..40) do
  if i % 3 == 0
    username = Faker::GameOfThrones.unique.character
  elsif i % 3 == 1
    username = Faker::StarWars.unique.character
  else
    username = Faker::RickAndMorty.unique.character
  end

  username.gsub!(/[^0-9A-Za-z_]/,"")

  while User.find_by(username: username)
    username += "#{rand 9}"
  end
  if i == 0
    User.create(username: 'DotifyGuest', email: 'DotifyGuest@dotify.io', password: 'examplePassword4')
  else
    User.create(
      username: username,
      email: Faker::Internet.unique.safe_email(username),
      password: Faker::Internet.password(8)
    )
  end

end

################################################################
# Artists, Albums, and Songs, generated from paper cited below #
################################################################
unique_albums = []
unique_artists = []

# sample artworks for albums with missing art to pick randomly from 1 of 9
# stock photos
sampleArtworks = ["sample_artwork1.jpg", "sample_artwork2.jpeg",
                  "sample_artwork3.jpg", "sample_artwork4.jpeg",
                  "sample_artwork5.jpg", "sample_artwork6.jpg",
                  "sample_artwork7.jpg", "sample_artwork8.jpg",
                  "sample_artwork9.jpg"]
CSV.foreach('./db/songSeeds.csv') do |song|
  if song[5].nil?
    p "skipping #{song[0]} due to lack of album art"
    next
  end

  unless unique_artists.include?(song[1])
    new_artist = Artist.new(
      name: song[1]
    )
    
    artist_hyperlink = "https://s3-us-west-1.amazonaws.com/dotify-dev/artist_images/"
    artist_count = Artist.all.length
    rand_decider = rand (1..2)
    num_to_add = (artist_count % 96 + 1).to_s
    if rand_decider % 2 == 0
      artist_file_ext = "W" + num_to_add + ".jpg"
    else
      artist_file_ext = "M" + num_to_add + ".jpg"
    end

    artist_image_target = artist_hyperlink + artist_file_ext
    file = EzDownload.open(artist_image_target)

    new_artist.img.attach(io: file, filename: artist_image_target)
    new_artist.save!

    unique_artists.push(song[1])
  end
  
  artist_id = Artist.find_by(name: song[1]).id

  unless unique_albums.include?(song[2])
    album_to_save = Album.new(title: song[2], artist_id: artist_id)
    unique_albums.push(song[2])


    ################################################################
    # attaching img to each album and saving to database
    ################################################################
    print(song)
    album_art_string_to_find = song[5][48..-1]
    hyperlink = "https://s3-us-west-1.amazonaws.com/dotify-dev/album_art/"
    if File.readlines("./db/albumArtNames.txt").grep(/#{album_art_string_to_find}/).size == 1
      image_target = hyperlink + album_art_string_to_find
    else
      image_target = hyperlink + sampleArtworks.sample
    end
    file = EzDownload.open(image_target)
    album_to_save.art.attach(io: file, filename: album_art_string_to_find)
    album_to_save.save!
    puts("album #{album_to_save} seeded with AWS")
  end
  ################################################################
  album_id = Album.find_by(title: song[2]).id


  # coverts 2:43 into 2*60 + 43
  song_length = (song[3][0].to_i*60 + song[3][2..3].to_i)

  song_to_save = Song.new(
                 title: song[0],
                 length: song_length,
                 plays: (rand (1..1000000)),
                 artist_id: artist_id,
                 album_id: album_id
                )

  ################################################################
  # create hyperlinks for each song
  hyperlink = "https://s3-us-west-1.amazonaws.com/dotify-dev/fma_small/".split("")
  target_file_ext = song[6].to_s.split("")
  while target_file_ext.length < 6
    target_file_ext.unshift("0")
  end
  mp3_target = hyperlink.concat(target_file_ext).join("")+".mp3"
  target_file_ext = target_file_ext.join("")+".mp3"
  ################################################################
  # grab mp3 from aws then save song to DB with attached mp3
  file = EzDownload.open(mp3_target)
  puts(file)
  song_to_save.mp3.attach(io: file, filename: target_file_ext)
  song_to_save.save!
  puts ("song successfully seeded with AWS")
  ################################################################

  last_artist = Song.last.artist
  new_plays = last_artist.plays + Song.last.plays
  Artist.update(last_artist.id, plays: new_plays)
end

# Seeds of mp3 files and metadata associated with those MP3
# were generated from the following academic paper.
# @inproceedings{fma_dataset,
#   title = {FMA: A Dataset for Music Analysis},
#   author = {Defferrard, Micha\"el and Benzi, Kirell and Vandergheynst, Pierre and Bresson, Xavier},
#   booktitle = {18th International Society for Music Information Retrieval Conference},
#   year = {2017},
#   url = {https://arxiv.org/abs/1612.01840},
# }


############################################################
# followees_followers seeds                                #
############################################################
# grab indices of information for user follows / saves
first_user_id = User.first.id
last_user_id = User.last.id
first_song_id = Song.first.id
last_song_id = Song.last.id

# This to be used when creating follows
# first_artist_id = Artist.first.id
# last_artist_id = Artist.last.id
# first_album_id = Album.first.id
# last_album_id = Album.last.id

# iterate through each user to create necessary associations
for i in (first_user_id..last_user_id) do
  listToFollow = []
  numberOfFollows = rand 14
  numberOfPlaylists = rand 3

  while listToFollow.length < numberOfFollows
    random_user = rand(first_user_id..last_user_id)
    listToFollow.push(random_user) unless (listToFollow.include?(random_user) || random_user == 7)
  end

  for j in (0...numberOfFollows) do
    FolloweesFollower.create(
      followee_id: listToFollow[j],
      follower_id: i
      )
  end

  for j in (0..numberOfPlaylists) do
    number_of_songs = (rand 20 + 7)

    Playlist.create(
      name: Faker::Lorem.sentence(1, false, 4),
      creator_id: i
    )

    playlist_id = Playlist.last.id
    for k in (0..number_of_songs) do
      song_to_add = rand(first_song_id..last_song_id)
      PlaylistsSong.create(
        playlist_id: playlist_id,
        song_id: song_to_add
      )
    end
  end
end
