class PagesController < ApplicationController
  def home
    if params[:query].present?
      @markers = BikePark.near(params[:query], 1)
    else
      @markers = []
    end

    # @bike_parks = BikePark.geocoded

    # @markers = @bike_parks.map do |bike_park|
    #   {
    #     lat: bike_park.lat,
    #     lng: bike_park.lng
    #   }
    # end

  end
end
