class UsersController < ApplicationController

  def index
    @users = User.where('title LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.htmls
      format.json

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
