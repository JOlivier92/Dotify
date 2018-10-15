# == Schema Information
#
# Table name: playlists_songs
#
#  id          :bigint(8)        not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistsSong < ApplicationRecord
  validates :playlist_id, :song_id, presence: true

  belongs_to :song
  belongs_to :playlist

end
