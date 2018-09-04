class GroupsController < ApplicationController

# :new, :create, :edit, :update


  def new
  end

  def create
    @group = Group.new()
  end

  def edit
  end

  def update
  end

  private
  def group_params
    params.permit(:name)
  end


end
