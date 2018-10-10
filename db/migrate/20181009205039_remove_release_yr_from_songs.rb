class RemoveReleaseYrFromSongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :release_yr
  end
end
