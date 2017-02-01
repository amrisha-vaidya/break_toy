class TasksController< ApplicationController

  def new
    if user_signed_in?
      @task = Task.new
      @users  = User.all
      @chores = Chore.all

      return :new
    else
      flash[:notice] = "Please Sign in to assign a chore"
    end
  end

  def create
    if user_signed_in?
      @task = Task.create(task_params)
      @chore= Chore.find(params[:task][:chores_id])
      @user = User.find(params[:task][:users_id])

      @task.save

      client = Twilio::REST::Client.new(
        ENV["TWILIO_ACCOUNT_SID"],
        ENV["TWILIO_AUTH_TOKEN"]
      )

      to = @user.phone_number
      to = '+1' + to

      text_body = "Hi #{@user.first_name}! Please finish #{@chore.title} by #{@task.finish_by} :)"


      client.messages.create(
        to: to,
        from: "+16172022161",
        body: text_body
      )
    end
  end

  # def destroy
  #   assign task must be destroyed after completed? is true ->
  #   send out text message for this? to all housemates?
  # end

  private

  def task_params
    params.require(:task).permit(
      :finish_by,
      :users_id,
      :chores_id
    )
  end
end
