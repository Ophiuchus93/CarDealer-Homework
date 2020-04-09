Rails.application.routes.draw do
  namespace :api do
    resources :cars do
      resources :features
    end
  end
end
