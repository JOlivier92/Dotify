require 'csv'
# AlbumsSave.destroy_all
# ArtistsFollower.destroy_all
# Playlist.destroy_all
# PlaylistsFollower.destroy_all
# PlaylistsSong.destroy_all
# SongSave.destroy_all
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
for i in (0..99) do
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

  User.create(
    username: username,
    email: Faker::Internet.unique.safe_email(username),
    password: Faker::Internet.password(8)
  )
end

############################################################
# followees_followers seeds --- biases a few popular users #
############################################################
first_user_id = User.first.id
last_user_id = User.last.id
for i in (first_user_id..last_user_id) do
  listToFollow = []
  numberOfFollows = rand 14
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
end
############################################################
# Artists, Albums, and Songs, generated from  #
############################################################
unique_albums = []
unique_artists = []
CSV.foreach('./db/songSeeds.csv') do |song|
  unless unique_artists.include?(song[1])
    Artist.create(name: song[1])
    unique_artists.push(song[1])
  end
  artist_id = Artist.find_by(name: song[1]).id

  unless unique_albums.include?(song[2])
    Album.create(title: song[2], artist_id: artist_id)
    unique_albums.push(song[2])
  end
  album_id = Album.find_by(title: song[2]).id

  Song.create(
    title: song[0],
    length: song[3],
    plays: (rand (1..1000000)),
    release_yr: 2000,
    artist_id: artist_id,
    album_id: album_id
  )
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
