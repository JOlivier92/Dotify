class FolloweesFollowersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :followees_followers do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end
    add_index :followees_followers, [:follower_id, :followee_id]
    add_index :followees_followers, :followee_id
  end
end
