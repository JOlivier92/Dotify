class CreateAlbumsSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :albums_saves do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
    end
    add_index :albums_saves, [:user_id, :song_id], unique: true
    add_index :albums_saves, :song_id
  end
end
