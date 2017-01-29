class Task < ApplicationRecord
  belongs_to  :user
  belings_to  :chore
  validates :finsih_by, presence: true
end
