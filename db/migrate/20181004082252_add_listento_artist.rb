class AddListentoArtist < ActiveRecord::Migration[5.2]
  def change
    remove_column :artists, :listens
    add_column :artists, :plays, :integer, default: 0, null: false

    add_column :artists_followers, :artist_id, :integer, null: false
    add_column :artists_followers, :follower_id, :integer, null: false
    add_timestamps :artists_followers
    add_index :artists_followers, [:artist_id, :follower_id]
    add_index :artists_followers, :follower_id
  end
end
