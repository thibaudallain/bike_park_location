# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require "csv"

BikePark.destroy_all

filepath = 'db/bike_parks_idf.csv'
csv_options = { col_sep: ';', quote_char: '"', headers: :first_row }

CSV.foreach(filepath, csv_options) do |row|
  covered = row[2] == "OUI"
  free = row[4] == "NON"
  BikePark.create(
    lat: row[0],
    lng: row[1],
    covered: covered,
    capacity: row[3].to_i,
    free: free,
    typology: row[5]
    )
end
