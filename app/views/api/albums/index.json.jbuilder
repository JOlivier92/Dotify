@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist
    json.art_url url_for(album.photo)
  end
end
