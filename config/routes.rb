Rails.application.routes.draw do


  devise_for :users
  # 仮置きのルーティング
  get  'messages/index' => 'messages#index'


end
