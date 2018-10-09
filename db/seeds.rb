
# Album.destroy_all
# AlbumsSave.destroy_all
# Artist.destroy_all
# ArtistsFollower.destroy_all
FolloweesFollower.destroy_all
# Playlist.destroy_all
# PlaylistsFollower.destroy_all
# PlaylistsSong.destroy_all
# Song.destroy_all
# SongSave.destroy_all
User.destroy_all

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


#   User.last do |user|
#     for i in (0..999) do
#       if i % 5 == 0 do
#         user.like something
#       end
#       user.listen_to random song
#     end
#   end
#
# end
# create song
# listens = listens.rand(0,100000)

# Seeds of mp3 files and metadata associated with those MP3
# were generated from the following academic paper.
# @inproceedings{fma_dataset,
#   title = {FMA: A Dataset for Music Analysis},
#   author = {Defferrard, Micha\"el and Benzi, Kirell and Vandergheynst, Pierre and Bresson, Xavier},
#   booktitle = {18th International Society for Music Information Retrieval Conference},
#   year = {2017},
#   url = {https://arxiv.org/abs/1612.01840},
# }
