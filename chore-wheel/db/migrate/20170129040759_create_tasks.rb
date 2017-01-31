class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.datetime :finish_by,      null: false
      t.belongs_to :users
      t.belongs_to :chores
      t.timestamps
    end
  end
end
