class Api::AddressesController < ApplicationController
before_action :set_location, only: [:index, :create]
before_action :set_address, only: [:destroy, :update]

def index
  render json: @location.addresses.all 
end

def create
  address = @location.addresses.new(address_params)
  if address.save
    render json: address
  else
    render json: { errors: address.errors}
  end
end

def update 
  address.update(address_params)
  render json: address
end

def destroy
  @address.destroy
  render json: { message: 'Address Destroyed' }
end

private

def address_params
  params.require(:location).permit(:street, :city, :state, :zip, :location_id)
end

def set_address
  @address = Address.find(params[:id])
end

def set_location
  @location = Location.find(params[:location_id])
end
end
