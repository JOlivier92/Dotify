@songs.each do |song|
  json.set! song.id do
    json.extract! song, :title, :id
    json.album song.album
    json.artist song.album.artist
    json.songUrl url_for(song.mp3)
  end
end
