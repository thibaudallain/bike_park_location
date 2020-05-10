class SearchedAddress < ApplicationRecord
  geocoded_by :address
  after_validation :geocode,
  :if => lambda{ |obj| obj.address_changed? }
end
