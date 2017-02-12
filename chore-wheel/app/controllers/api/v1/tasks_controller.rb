class Api::V1::TasksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def fetch_user_chores
    @user_chores = Task.where(users_id: params[:users_id])
    render json: @user_chores, include: ['chore']
  end

  def create_task
      # puts "TASK"
      @task = Task.new(task_params)
      @task.finish_by = Time.new(params[:task][:finish_by])
      # Need details to sent text message.
      @chore= Chore.find(params[:task][:chores_id])
      @task.chore = @chore

      @user = User.find(params[:task][:users_id])
      @task.user = @user

      @task.created_at = Time.now
      @task.updated_at = Time.now

      client = Twilio::REST::Client.new(
        ENV["TWILIO_ACCOUNT_SID"],
        ENV["TWILIO_AUTH_TOKEN"]
      )

      to = @user.phone_number
      if !to.nil?
        to = '+1' + to
        text_body = "Hi #{@user.first_name}! Please finish #{@chore.title} by #{@task.finish_by} :)"

        client.messages.create(
          to: to,
          from: "+16172022161",
          body: text_body
          )
      end

      respond_to do |format|
	      if @task.save
	        format.json { render json: @task, include:['chore'], status: :created }
	      else
	        format.json { render json: @task.errors, status: :unprocessable_entity }
	      end
    	end
  end

  def complete_task
    @task= Task.find(params[:id])
    @task.update_attributes(task_params)

    respond_to do |format|
      if @task.save
        format.json { render json: @task, status: :created }
      else
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
  	end
  end

  private

  def task_params
    params.require(:task).permit(
      :finish_by,
      :completed,
      :users_id,
      :chores_id
    )
  end

end
