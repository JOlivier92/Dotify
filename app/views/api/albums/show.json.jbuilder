json.set! @album.id do
  json.extract! @album, :id, :title
  json.artist @album.artist
  json.songList @albumsongs
end
