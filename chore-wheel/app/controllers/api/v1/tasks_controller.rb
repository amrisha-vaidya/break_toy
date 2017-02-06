class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_user_chores
    @user_chores = Task.where(users_id: params[:users_id])
    render json: @user_chores, include: ['chore']
  end

end
