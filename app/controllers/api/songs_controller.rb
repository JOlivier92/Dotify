class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:album).includes(album: :artist)
  end

  def show
    @song = Song.find(params[:id])
  end

  # creates an index of songs given input params
  def create
    @songs = Song.all
    if params[:query][:queryString] == ""
      render json: {}
    else
      @songs = @songs.select { |song| song.title.include?(params[:query][:queryString]) }
      @songs = @songs.sort_by {|song| -song.plays}.take(10)
      render :index
    end
  end

end
