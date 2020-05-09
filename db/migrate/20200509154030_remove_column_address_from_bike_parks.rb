class RemoveColumnAddressFromBikeParks < ActiveRecord::Migration[6.0]
  def change
    remove_column :bike_parks, :address, :string
  end
end
