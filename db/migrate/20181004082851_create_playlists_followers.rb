class CreatePlaylistsFollowers < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists_followers do |t|
      t.integer :playlist_id, null: false
      t.integer :follower_id, null: false
      t.timestamps
    end
    add_index :playlists_followers, [:playlist_id, :follower_id]
    add_index :playlists_followers, :follower_id
  end
end
