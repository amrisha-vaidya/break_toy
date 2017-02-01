class Users::SessionsController < Devise::SessionsController
# before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  def after_sign_in_path_for(resource)
    @user = User.find(resource.id)
    if @user.phone_number == nil
      edit_user_registration_url(current_user)
      # flash[:notice] = "Please Edit your Profile to add your phone number, all alerts and reminders will be sent to your phone!!"

      # this route
      # dashboard_index_url
    else
      # that route
      super
    end
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
