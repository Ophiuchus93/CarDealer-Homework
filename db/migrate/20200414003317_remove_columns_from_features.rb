class RemoveColumnsFromFeatures < ActiveRecord::Migration[6.0]
  def change

    remove_column :features, :self_driving, :boolean

    remove_column :features, :sunroof, :boolean

    remove_column :features, :electric, :boolean

    remove_column :features, :fourwd, :boolean

    remove_column :features, :heated_seats, :boolean

    remove_column :features, :backup_camera, :boolean

    remove_column :features, :used, :boolean

    add_column :features, :name, :string

    add_column :features, :exists, :boolean, default: false
  end
end
