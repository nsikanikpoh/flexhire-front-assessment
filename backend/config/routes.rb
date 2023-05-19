Rails.application.routes.draw do

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
  end

  mount ActionCable.server => '/cable'

  post "/graphql", to: "graphql#execute"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'flexhire-api' => 'graphql#flexhire_api_proxy'
  post 'flexhire-callback' => 'graphql#flexhire_callback'
end
