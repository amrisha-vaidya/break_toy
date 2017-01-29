Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "home#index"

  resources :dashboard, only: [:index]
  resources :home, only: [:index]

  resources :chores

  resources :users do
    resources :tasks
  end

  resources :tasks


end
