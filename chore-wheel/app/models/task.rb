class Task < ApplicationRecord
  belongs_to  :user
  belongs_to  :chore
  validates :finish_by, presence: true 
end
