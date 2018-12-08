class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :days
      t.integer :trip_id
      t.belongs_to :trip, foreign_key: true

      t.timestamps
    end
  end
end
