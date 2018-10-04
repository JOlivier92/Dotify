# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Artist.destroy_all
# Album.destroy_all
User.destroy_all
# Song.destroy_all
# Like.destroy_all
# Listen.destroy_all
Faker::UniqueGenerator.clear


# Generates a fake set of users based off of some of the developer's
# favorite shows and movies!
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
  User.last do |user|
    for i in (0..999) do
      user.listen_to random song
    end
  end

end
