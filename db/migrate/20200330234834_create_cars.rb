class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :model
      t.string :make
      t.integer :year
      t.string :color

      t.timestamps
    end
  end
end
