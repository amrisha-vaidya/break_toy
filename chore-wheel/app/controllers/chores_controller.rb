class ChoresController< ApplicationController
  def index
    if user_signed_in?
      @chores = Chore.where({is_enabled: true}).order('created_at DESC')
    end
  end

  def new
    if user_signed_in?
      @chore = Chore.new
    else
      flash[:notice] = "Please Sign in to add a chore"
      redirect_to new_user_session_path
    end
  end

  def create
    if user_signed_in?
      @chore = Chore.create(chore_params)
      @chore.created_at = Time.now
      @chore.updated_at = Time.now
      # does this also create updated_at and created_at
      @chore.save
      flash[:notice] = "Chore saved successfully"
      redirect_to chores_path
    else
      flash[:notice]="Please Sign in to create a chore"
      redirect_to new_user_session_path
    end
  end

  def edit
    if user_signed_in?
      @chore = Chore.find(params[:id])
    else
      flash[:notice] = "Please sign in to edit this chore"
      redirect_to new_user_session_path
    end
  end

  def destroy
    if user_signed_in?
      @chore=Chore.find(params[:id])
      @chore.is_enabled = false
      @chore.save
      flash[:alert] = "You have deleted this chore"
      redirect_to chores_path
    else
      flash[:notice] = "Please sign in to delete this chore"
      redirect_to new_user_session_path
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
