class HomeController< ApplicationController
  def index
    if user_signed_in?
      redirect_to :dashboard_index
    else
      redirect_to :homepage_index
    end
  end

end
