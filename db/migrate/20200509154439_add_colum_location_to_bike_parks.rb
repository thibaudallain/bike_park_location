class AddColumLocationToBikeParks < ActiveRecord::Migration[6.0]
  def change
    add_column :bike_parks, :location, :string
  end
end
