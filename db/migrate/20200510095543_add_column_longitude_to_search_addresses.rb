class AddColumnLongitudeToSearchAddresses < ActiveRecord::Migration[6.0]
  def change
    add_column :searched_addresses, :longitude, :float
  end
end
