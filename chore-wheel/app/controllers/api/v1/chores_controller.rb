class Api::V1::ChoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_user_chores
    @user_chores = Chore.where(users_id: params[:users_id])
    render json: @user_chores
  end

end
