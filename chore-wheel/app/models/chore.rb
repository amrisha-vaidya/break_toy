class Chore < ApplicationRecord
  has_many  :tasks
  validates :title, presence: true
  validates :description, presence: true
end
