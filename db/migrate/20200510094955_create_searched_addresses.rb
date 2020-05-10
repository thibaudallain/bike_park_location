class CreateSearchedAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :searched_addresses do |t|
      t.string :address
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
