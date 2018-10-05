class CreateSongsSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :songs_saves do |t|
      t.integer :user_id, null: false
      t.integer :album_id, null: false
    end
    add_index :songs_saves, [:user_id, :album_id], unique: true
    add_index :songs_saves, :album_id
  end
end
