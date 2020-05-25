class PagesController < ApplicationController
  def home
    if params[:query].present?
      if /Lat:.+,Lng:.+/.match(params[:query])
        latitude = params[:query].split(",")[0].split(":")[1].to_f
        longitude = params[:query].split(",")[1].split(":")[1].to_f
        @geolocation = Geolocation.create(latitude: latitude, longitude: longitude)
        @bike_parks = BikePark.near(@geolocation, 0.5)
        @marker_address = {
          lat: latitude,
          lng: longitude,
        }
        @markers = @bike_parks.map do |bike_park|
          {
            lat: bike_park.lat,
            lng: bike_park.lng,
            infoWindow: render_to_string(partial: "info_window", locals: { bike_park: bike_park, address: @geolocation })
          }
        end
      else
        @searched_address = SearchedAddress.create(address: params[:query])
        @bike_parks = BikePark.near(params[:query], 0.5)
        @marker_address = {
          lat: @searched_address.latitude,
          lng: @searched_address.longitude,
        }
        @markers = @bike_parks.map do |bike_park|
          {
            lat: bike_park.lat,
            lng: bike_park.lng,
            infoWindow: render_to_string(partial: "info_window", locals: { bike_park: bike_park, address: @searched_address })
          }
        end
      end
    else
      @markers = []
    end
  end
end
