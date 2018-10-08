class AddUniquenessToSeveralIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index :playlists_followers, [:playlist_id, :follower_id]
    add_index :playlists_followers, [:playlist_id, :follower_id], unique: true
    remove_index :artists_followers, [:artist_id, :follower_id]
    add_index :artists_followers, [:artist_id, :follower_id], unique: true
  end
end
