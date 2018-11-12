# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :name, :creator_id, presence: true

  has_one_attached :art
  
  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: :User


  has_many :playlists_songs,
  foreign_key: :playlist_id,
  class_name: :PlaylistsSong

  has_many :songs,
  through: :playlists_songs,
  source: :song
end
