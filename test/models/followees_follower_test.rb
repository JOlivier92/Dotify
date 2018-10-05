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

require 'test_helper'

class FolloweesFollowerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
