class CreateBikeParks < ActiveRecord::Migration[6.0]
  def change
    create_table :bike_parks do |t|
      t.float :lng
      t.float :lat
      t.boolean :covered
      t.integer :capacity
      t.boolean :free
      t.string :type

      t.timestamps
    end
  end
end
