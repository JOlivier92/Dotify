class Song < ApplicationRecord
  validates :title, :length, :plays, :release_yr, :artist_id, :album_id, presence: true

  belongs_to :artist
  belongs_to :album
end
