class FixAlbumSavesSongColumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :albums_saves, :song_id
    remove_index :albums_saves, [:user_id, :song_id]
    add_column :albums_saves, :album_id, :integer, null: false
    add_timestamps :albums_saves
    add_index :albums_saves, :album_id
    add_index :albums_saves, [:user_id, :album_id], unique: true
  end
end
