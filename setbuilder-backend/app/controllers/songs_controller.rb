class SongsController < ApplicationController
# before_action :find_song, only: [:update]
  # def index
  #   # @songs = Song.all
  #   render json: Song.all
  # end

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

private

def song_params
  params.permit(:name, :notes)
end

def find_song
  @song = Song.find(params[:id])
end


end
