class ProfilesController< ApplicationController
  def show
    if user_signed_in? && (User.find(params[:id]) == current_user)
      @user = User.find(params[:id])
    else
      flash[:alert]= 'Please Sign in to view your profile'
    end
  end

end
