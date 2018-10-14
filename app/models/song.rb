class Song < ApplicationRecord
  validates :title, :length, :plays, :artist_id, :album_id, presence: true

  has_one_attached :mp3
  belongs_to :artist
  belongs_to :album

end
