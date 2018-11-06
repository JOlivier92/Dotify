json.set! @song.id do
  json.extract! @song, :id, :title
  json.songUrl url_for(@song.mp3)
end
