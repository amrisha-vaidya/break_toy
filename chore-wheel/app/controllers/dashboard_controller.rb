class DashboardController < ApplicationController
  def index
    @chore = Chore.all
  end
end
