class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_users
    @users = User.all
    render json: @users.to_json(include:{tasks:{include: :chore}}), status: :ok
  end


end
