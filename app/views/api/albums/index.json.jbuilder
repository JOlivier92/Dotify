@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist
    json.artist album.artist
    json.art_url url_for(album.art)
  end
end
