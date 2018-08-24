class SongsController < ApplicationController
before_action :find_song, only: [:update, :destroy]

  def index
    render json: Song.all
  end

  def show
    render json: Song.find(params[:id])
  end

  def update
    @song.update(song_params)
    if @song.save
      render json: @song, status: :accepted
    else
      render json: { errors: @song.errors.full_messages }, status: :unprocessible_entity
    end
  end


  def create
    render json: Song.create(song_params)
  end


  def destroy
    render json: Song.find(params[:id]).destroy
  end

private

  def song_params
    params.require(:song).permit(:name, :notes, :setlist_id, :user_id)
  end

  def find_song
    @song = Song.find(params[:id])
  end


end
