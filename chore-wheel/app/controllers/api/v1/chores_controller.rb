class Api::V1::ChoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_chores
    @chores = Chore.all
    render json: @chores
  end

  def create_chore
      puts "chore"
      @chore = Chore.new(chore_params)

      @chore.created_at = Time.now
      @chore.updated_at = Time.now

      respond_to do |format|
	      if @chore.save
	        format.json { render json: @chore, status: :created }
	      else
	        format.json { render json: @chore.errors, status: :unprocessable_entity }
	      end
    	end
  end

  private

  def chore_params
    params.require(:chore).permit(
    :title,
    :description
    )
  end
end
