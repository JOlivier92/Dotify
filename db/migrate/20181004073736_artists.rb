class Artists < ActiveRecord::Migration[5.2]
    def change
      create_table :artists do |t|
        t.string :name, null: false
        t.text :bio
        t.integer :listens, null: false, default: 0
        t.timestamps
      end
      add_index :artists, :name
    end
end
