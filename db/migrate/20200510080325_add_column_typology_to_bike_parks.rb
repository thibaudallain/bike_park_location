class AddColumnTypologyToBikeParks < ActiveRecord::Migration[6.0]
  def change
    add_column :bike_parks, :typology, :string
  end
end
