class TasksController< ApplicationController
  def create
    if user_signed_in?
      @task = Task.create(task_params)
      @task.save

      client = TWILIO::REST::CLIENT.new(
        ENV["TWILIO_ACCOUNT_SID"],
        ENV["TWILIO_AUTH_TOKEN"]
      )

      to = "+13366926843"
      client.message.create(
        to:to,
        from:"+13367702390",
        body: "Hi there!"
      )
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :finish_by,
      :users_id,
      :chores_id
    )
  end
end
