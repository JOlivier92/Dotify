#!/usr/bin/env ruby
require 'csv'

# raw_tracks.csv file is now hidden from git.
def generateSongsArtistsAndAlbums
  songArr = []
  songIds = []
  CSV.foreach("./songIds.csv") do |track_id|
    songIds.push(track_id[0].to_i)
  end
  CSV.foreach("./raw_tracks.csv") do |row|
    unless (row[0].to_i == 0 || row[4] == nil || row[6] == nil || row[8] == nil)
      if songIds.include?(row[0].to_i)
        song = {:seed_id => 0, :name => "", :artist => "", :album => "", :genre => "", :album_art_url => ""}
        song[:name] = row[8]
        song[:artist] = row[4]
        song[:album] = row[2]
        song[:length] = row[5]
        song[:genre] = row[6].split("genre_title").join("").split("'")[7]
        song[:album_art_url] = row[7]
        song[:seed_id] = row[0].to_i
        songArr.push(song)
      end
    end
  end
  songSeeds = "songSeeds.csv"
  CSV.open(songSeeds, 'w') do |writer|
    songArr.each do |song|
      writer << [song[:name],song[:artist],song[:album],song[:length],song[:genre],song[:album_art_url],song[:seed_id]]
    end
  end
end
generateSongsArtistsAndAlbums()
