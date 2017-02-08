class Api::V1::ChoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_chores
    @chores = Chore.where(users_id: params[:users_id])
    render json: @chores
  end

end
