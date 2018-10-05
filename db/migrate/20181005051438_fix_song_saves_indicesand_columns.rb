class FixSongSavesIndicesandColumns < ActiveRecord::Migration[5.2]
  def change
    remove_index :songs_saves, :album_id
    remove_index :songs_saves, [:user_id, :album_id]
    remove_column :songs_saves, :album_id

    add_column :songs_saves, :song_id, :integer, null: false
    add_timestamps :songs_saves
    add_index :songs_saves, [:user_id, :song_id], unique: true
    add_index :songs_saves, :song_id
  end
end
