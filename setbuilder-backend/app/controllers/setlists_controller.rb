class SetlistsController < ApplicationController

  def index
    render json: Setlist.all
  end

  def show
    render json: Setlist.find(params[:id])
  end


  private

  def setlist_params
    params.permit(:title)
  end

  def find_setlist
    @setlist = Setlist.find(params[:id])
  end





end
