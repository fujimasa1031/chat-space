class UsersController < ApplicationController

  def index
    @user = User.all
  end


  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path, notice: "アカウントを更新しました"
    else
      render :edit
    end
  end


  private
  def user_params
    params.require(:user).permit(:name, :email)
  end

end
