# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  plays      :integer          default(0), not null
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :songs
  has_many :albums
end
