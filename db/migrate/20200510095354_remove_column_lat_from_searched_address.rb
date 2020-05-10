class RemoveColumnLatFromSearchedAddress < ActiveRecord::Migration[6.0]
  def change
    remove_column :searched_addresses, :lat, :float
  end
end
