class RemoveColumnLngFromSearchedAddress < ActiveRecord::Migration[6.0]
  def change
    remove_column :searched_addresses, :lng, :float
  end
end
