class PagesController < ApplicationController
  def home
    if params[:query].present?
      @searched_address = SearchedAddress.create(address: params[:query])
      @bike_parks = BikePark.near(params[:query], 1)
      @markers = @bike_parks.map do |bike_park|
        {
          lat: bike_park.lat,
          lng: bike_park.lng,
          infoWindow: render_to_string(partial: "info_window", locals: { bike_park: bike_park, address: @searched_address })
        }
      end
      @marker_address = {
        lat: @searched_address.latitude,
        lng: @searched_address.longitude,
      }
    else
      @markers = []
    end

  end
end
