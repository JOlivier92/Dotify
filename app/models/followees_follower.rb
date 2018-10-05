# == Schema Information
#
# Table name: followees_followers
#
#  id          :bigint(8)        not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class FolloweesFollower < ApplicationRecord
  validates :followee_id, :follower_id, presence: true

  belongs_to :followee,
  class_name: :User

  belongs_to :follower,
  class_name: :User

end
