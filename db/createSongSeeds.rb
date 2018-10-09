require 'csv'

def generateSongsArtistsAndAlbums
  artists = []
  songArr = []
  songIds = []
  Dir.foreach("./fma_small/") do |filename|
    next if filename[6..-1] != ".mp3"
    songIds.push(filename[0..5].to_i)
  end
  CSV.foreach("./raw_tracks.csv") do |row|
    unless (row[0].to_i == 0 || row[4] == nil || row[6] == nil || row[8] == nil)
      if songIds.include?(row[0].to_i)
        song = {:name => "", :artist => "", :album => "", :genre => "", :song_id => 0}
        song[:name] = row[8]
        song[:artist] = row[4]
        song[:album] = row[2]
        song[:song_id] = row[0].to_i
        song[:genre] = row[6].split("genre_title").join("").split("'")[7]
        songArr.push(song)
      end
    end
  end
end
