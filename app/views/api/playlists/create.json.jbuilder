
json.set! @playlist.id do
  json.extract! @playlist, :id, :name
  json.creator_id @playlist.creator_id
  json.songList @playlist.songs
end
