Rails.application.routes.draw do
  namespace :api do 
    resources :trips do 
      resources :locations do 
        resources :addresses 
      end 
    end 
  end 
end
