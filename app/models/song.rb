# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  length     :integer          not null
#  plays      :integer          default(0), not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :length, :plays, :artist_id, :album_id, presence: true

  has_one_attached :mp3
  belongs_to :artist
  belongs_to :album

  has_many :playlists_songs,
  foreign_key: :song_id,
  class_name: :PlaylistsSong

  has_many :playlists,
  through: :playlists_songs,
  source: :playlist

end
