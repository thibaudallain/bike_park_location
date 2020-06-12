class PagesController < ApplicationController
  MAPBOX_RADIUS = 0.5

  def home
    return unless params[:query].present?
      
    if /Latitude:.+,Longitude:.+/.match(params[:query])
      latitude = params[:query].split(",")[0].split(":")[1].to_f
      longitude = params[:query].split(",")[1].split(":")[1].to_f
      @geolocation = Geolocation.create(latitude: latitude, longitude: longitude)
      @bike_parks = BikePark.near(@geolocation, MAPBOX_RADIUS)
    else
      @geolocation = SearchedAddress.create(address: params[:query])
      @bike_parks = BikePark.near(params[:query], MAPBOX_RADIUS)
      latitude = @geolocation.latitude
      longitude = @geolocation.longitude
    end
    compute_markers(latitude, longitude, @geolocation)
  end

  private

  def compute_markers(latitude, longitude, geolocation)
    return @markers = [] if @bike_parks.empty?

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
  end
end
