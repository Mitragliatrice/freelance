# == Route Map
#
#              Prefix Verb   URI Pattern                        Controller#Action
# freelance_documents GET    /freelance_documents(.:format)     freelance_documents#index
#                     POST   /freelance_documents(.:format)     freelance_documents#create
#  freelance_document GET    /freelance_documents/:id(.:format) freelance_documents#show
#                     PATCH  /freelance_documents/:id(.:format) freelance_documents#update
#                     PUT    /freelance_documents/:id(.:format) freelance_documents#update
#                     DELETE /freelance_documents/:id(.:format) freelance_documents#destroy
# 

Rails.application.routes.draw do
  resources :freelance_documents
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
