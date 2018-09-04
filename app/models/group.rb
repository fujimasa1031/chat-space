class Group < ApplicationRecord
  has_many :members
  has_many :users, though: :members
  validates :name, presence: true
end
