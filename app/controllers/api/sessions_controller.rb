class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    unless @user
      @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )
    end
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username and/or password."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Login is required"], status: 404
    end
  end
end
