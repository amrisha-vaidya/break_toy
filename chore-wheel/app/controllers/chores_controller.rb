class ChoresController< ApplicationController
  def index
    @chore = Chore.all
  end

end
