@songs.each do |song|
  json.set! song.id do
    json.extract! song, :title, :id
    json.album_title song.album.title
    json.artist_name song.album.artist.name
  end
end
