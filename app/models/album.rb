class Album < ApplicationRecord
  validates :title, :artist_id, presence: true

  has_one_attached :art
  belongs_to :artist
  has_many :songs
end
