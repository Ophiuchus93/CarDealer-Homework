class CreateFeatures < ActiveRecord::Migration[6.0]
  def change
    create_table :features do |t|
      t.boolean :self_driving
      t.boolean :sunroof
      t.boolean :electric
      t.boolean :fourwd
      t.boolean :heated_seats
      t.boolean :backup_camera
      t.boolean :used
      t.belongs_to :car, null: false, foreign_key: true

      t.timestamps
    end
  end
end
