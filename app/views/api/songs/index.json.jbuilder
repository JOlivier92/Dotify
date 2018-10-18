# track2 = Track.new(title: 'Talk To me', artist_id: artist1.id)
# mp3_target = "https://s3.amazonaws.com/dotify-dev/#{}"
# file = EzDownload.open(mp3_target)
# track2.audio.attach(io: file, filename: '02_Talk_to_Me.mp3')
# track2.save!
# Song.last.mp3.attach

#
# last_artist = Song.last.a
@songs.each do |song|
  json.set! song.id do
    json.extract! song, :title, :id
    json.album_title song.album.title
    json.artist_name song.album.artist.name
    json.songUrl url_for(song.mp3)
  end
end
