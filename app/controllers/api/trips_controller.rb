class Api::TripsController < ApplicationController
  before_action :set_trip, only: [:update, :destroy]

  def index 
    render json: Trip.all
  end

  def create 
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else
      render json: {errors: trip.errors}
    end
  end

  # menu = Menu.new(menus_params)
  #   if menu.save
  #     render json: menu
  #   else
  #     render json: { errors: menu.errors }
  #   end

  def update 
    trip.update(trip_params)
    render json: trip
  end

  def destroy 
    @trip.destroy
    render json: {message: "Trip Removed"}
  end

  private 
    def trip_params
      params.require(:trip).permit(:name, :start_date, :end_date)
    end

    def set_trip  
      @trip = Menu.find(params[:id])
    end
end
