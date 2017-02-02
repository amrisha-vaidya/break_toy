class Task < ApplicationRecord
  belongs_to  :user, foreign_key: :users_id
  belongs_to  :chore, foreign_key: :chores_id
  validates :finish_by, presence: true
end
