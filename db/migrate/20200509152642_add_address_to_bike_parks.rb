class AddAddressToBikeParks < ActiveRecord::Migration[6.0]
  def change
    add_column :bike_parks, :address, :string
  end
end
