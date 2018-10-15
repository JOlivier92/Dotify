class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all.includes(:artist)
  end

  def show
    @album = Album.find(params[:id])
  end
end
