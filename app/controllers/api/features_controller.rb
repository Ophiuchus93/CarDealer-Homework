class Api::FeaturesController < ApplicationController
  before_action :set_car
  before_action :set_feature, only: [:show, :update, :destroy]

  def index
    render json: @car.features.all
  end

  def show
    render json: @feature
  end

  def create
    feature = @car.features.new(feature_params)

    if feature.save
      render json: feature
    else
      render json: { errors: feature.errors }, status: :unprocessable_entity
    end
  end

  def update
    @feature.update(feature_params)
    render json: @feature
  end

  def destroy
    @feature.destroy
  end

  private

    def set_car
      @car = Car.find(params[:car_id])
    end

    def set_feature
      @feature = Feature.find(params[:id])
    end

    def feature_params
      params.require(:feature).permit(:car_id, :name, :exists)
    end
end
