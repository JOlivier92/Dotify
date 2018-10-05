class Artists < ActiveRecord::Migration[5.2]
    def change
      create_table :artists do |t|
        t.string :name, null: false
        t.integer :listens, null: false, default: 0
      end
      add_index :artists, :name
    end
end
