class Group < ApplicationRecord

  has_many   :messages
  has_many   :members
  has_many   :users, through: :members

  def set_message
    if messages.last.present?
      messages.last.text? ? messages.last.text : "only image-file..."
    else
      "no comment now..."
    end
  end


end
