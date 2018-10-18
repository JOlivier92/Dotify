class Api::PlaylistsController < ApplicationController

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = Playlist.all.includes(:songs).includes(:creator)
  end

  def show
    @playlist = Playlist.find(params[:id])
    @playlist.songs
  end

  # creates an index of playlist given input params

  private
  def playlist_params
    params.require(:playlist).permit(:name)
  end

end



# def create
#   @playlists = Playlists.all
#   @playlists = @playlists.select { |playlist| playlist.title.include?(params[:query][:queryString]) }
#   @playlists = @playlists.sort_by {|playlist| -playlist.plays}.take(10)
#   render :index
# end
