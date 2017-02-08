class Api::V1::ChoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_chores
    @chores = Chore.all
    render json: @chores
  end
end
