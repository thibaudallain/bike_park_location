class AddColumnLatitudeToSearchAddresses < ActiveRecord::Migration[6.0]
  def change
    add_column :searched_addresses, :latitude, :float
  end
end
