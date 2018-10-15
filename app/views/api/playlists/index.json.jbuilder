@playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :name, :id
    json.song_ids playlist.songs.ids
  end
end
