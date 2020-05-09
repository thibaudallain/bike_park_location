class PagesController < ApplicationController
  def home
    @bike_parks = BikePark.geocoded

    @markers = @bike_parks.map do |bike_park|
      {
        lat: bike_park.lat,
        lng: bike_park.lng
      }
    end
  end
end
