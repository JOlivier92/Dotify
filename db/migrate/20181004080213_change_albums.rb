class ChangeAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :title, :string, null: false
    add_column :albums, :artist_id, :integer, null: false
    add_index :albums, :title
    add_index :albums, :artist_id
  end
end
