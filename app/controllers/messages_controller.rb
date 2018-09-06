class MessagesController < ApplicationController

before_action :set_group

def index
  @message = Message.find_by(params[:id])
  @messages = @group.messages.includes(:user)
end

def create
  @message = @group.messages.new(message_params)
  if @message.save
    redirect_to group_messages_path(@group), notice: "メッセージ送信が完了しました"
  else
    @messages = @group.messages.includes(:user)
    flash[:alert] = "メッセージを入力してください"
    render :index
  end
end


private

def message_params
  params.require(:message).permit(:text, :image).merge(user_id: current_user.id)
end

def set_group
    @group = Group.find_by(params[:group_id])
end

end
