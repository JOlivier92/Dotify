class AddTimestampsToTables < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :albums
    add_timestamps :songs
  end
end
