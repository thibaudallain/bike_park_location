class BikePark < ApplicationRecord
  validates :lat, uniqueness: { scope: :lng }
  reverse_geocoded_by :lat, :lng,
  :address => :location
  after_validation :reverse_geocode
end
