Rails.application.routes.draw do

<<<<<<< HEAD

  devise_for :users
  # 仮置きのルーティング
  get  'messages/index' => 'messages#index'

=======
  root 'messages#index'
>>>>>>> master

end
