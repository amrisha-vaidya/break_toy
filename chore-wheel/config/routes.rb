Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "home#index"

  # get "/add_user_details" to: "users/registrations#add_user_details"
  # post "/add_user_details" to: "users/registrations#add_user_details_post"

  resources :dashboard, only: [:index]
  resources :home, only: [:index]

  resources :chores

  resources :users do
    resources :tasks
  end

  resources :tasks


end
