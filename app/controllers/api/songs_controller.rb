class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
  end

  # creates an index of songs given input params
  def create
    @songs = Song.all
    @songs = @songs.select { |song| song.title.include?(params[:query][:queryString]) }
    @songs = @songs.sort_by {|song| -song.plays}.take(10)
    render :index
  end

end
