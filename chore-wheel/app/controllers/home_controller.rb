class HomeController< ApplicationController
  def index
    if user_signed_in?
      redirect_to :dashboard_index
    else
      return :index
    end
  end

end
