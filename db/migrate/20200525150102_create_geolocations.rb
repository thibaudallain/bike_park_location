class CreateGeolocations < ActiveRecord::Migration[6.0]
  def change
    create_table :geolocations do |t|
      t.float :latitude
      t.float :longitude
      t.string :address

      t.timestamps
    end
  end
end
