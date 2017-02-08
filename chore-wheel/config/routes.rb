Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }
  root to: "home#index"

  resources :dashboard, only: [:index]
  resources :home, only: [:index]
  resources :chores, only: [:index, :create, :edit, :destroy, :new]

  resources :users do
    resources :tasks
  end

  resources :tasks
  resources :profiles, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:fetch_users] do
        collection do
          get :fetch_users
        end
      end

      resources :tasks, only: [:fetch_user_chores] do
        collection do
          get :fetch_user_chores
        end
      end
      
      resources :chores, only: [:fetch_chores] do
        collection do
          get :fetch_chores
        end
      end
    end
  end
end
