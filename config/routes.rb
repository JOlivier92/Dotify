Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy]
    resources :songs, only: [:index, :show, :create]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
end
