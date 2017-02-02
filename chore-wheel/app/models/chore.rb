class Chore < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  has_many :tasks, foreign_key: :chores_id
end
