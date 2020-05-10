class RemoveColumnTypeFromBikeParks < ActiveRecord::Migration[6.0]
  def change
    remove_column :bike_parks, :type, :string
  end
end
