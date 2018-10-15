class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all.includes(:songs).includes(:creator)
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  # creates an index of playlist given input params
  def create
    @playlists = Playlists.all
    @playlists = @playlists.select { |playlist| playlist.title.include?(params[:query][:queryString]) }
    @playlists = @playlists.sort_by {|playlist| -playlist.plays}.take(10)
    render :index
  end

end
