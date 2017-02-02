class AddIsEnabledToChores < ActiveRecord::Migration[5.0]
  def change
    add_column :chores, :is_enabled, :boolean, default: true
  end
end
