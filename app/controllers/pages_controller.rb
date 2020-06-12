class PagesController < ApplicationController
  MAPBOX_RADIUS = 0.5

  def home
    return unless params[:query].present?
      
    if /Latitude:.+,Longitude:.+/.match(params[:query])
      binding.pry
      latitude = params[:query].split(",")[0].split(":")[1].to_f
      longitude = params[:query].split(",")[1].split(":")[1].to_f
      location = Geolocation.create(latitude: latitude, longitude: longitude)
    else
      location = SearchedAddress.create(address: params[:query])
    end
    compute_markers(location.latitude, location.longitude, location)
  end
  
  private
  
  def compute_markers(latitude, longitude, location)
    bike_parks = BikePark.near(location, MAPBOX_RADIUS)
    return @markers = [] if bike_parks.empty?

    @marker_address = {
      lat: latitude,
      lng: longitude,
    }
    @markers = bike_parks.map do |bike_park|
      {
        lat: bike_park.lat,
        lng: bike_park.lng,
        infoWindow: render_to_string(partial: "info_window", locals: { bike_park: bike_park, address: location })
      }
    end
  end
end
