# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_img     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  # This user following another user (followerID is currentUser)
  has_many :active_relationships,
  foreign_key: :follower_id,
  class_name: :FolloweesFollower,
  dependent: :destroy

  has_many :followees,
  through: :active_relationships,
  source: :followee

  # This user being followed by another user (followeeID is currentUser)
  has_many :passive_relationships,
  foreign_key: :followee_id,
  class_name: :FolloweesFollower,
  dependent: :destroy
  
  has_many :followers,
  through: :passive_relationships,
  source: :follower

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
