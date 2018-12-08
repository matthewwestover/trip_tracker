class Api::LocationsController < ApplicationController
  before_action :set_location, only: [:update, :destroy]
  before_action :set_trip, only: [:index, :create]

  def index
    render json: @trip.locations.all
  end

  def create
    location = @trip.locations.new(location_params)
    if location.save
      render json: location
    else
      render json: {errors: location.errors}
  end
end

def update 
  location.update(location_params)
  render json: location
end


def destroy
  @location.destroy
  render json: { errors: 'Location Deleted'}
end

  private 

    def location_params 
      params.require(:location).permit(:name, :days, :trip_id)
    end

    def set_location 
      @location = Location.find(params[:id])
    end

    def set_trip 
      @trip = Trip.find(params[:trip_id])
    end
end
