# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chore.create(
	title: "Do the Dishes",
	description: "Thursday and Monday",
	created_at: Time.now,
	updated_at: Time.now
)

Chore.create(
	title: "Clean the common area",
	description: "Make sure you clean the dining room and the living room.",
	created_at: Time.now,
	updated_at: Time.now
)

Chore.create(
	title: "Take out cat litter",
	description: "Every Wednesday",
	created_at: Time.now,
	updated_at: Time.now
)

Chore.create(
	title: "Mop the floor",
	description: "Mops are in the closet.",
	created_at: Time.now,
	updated_at: Time.now
)

User.create :first_name => "John", :last_name => "Smith", :email => "user1@example.com", :password => "user123", :phone_number => "717-344-7575"

User.create :first_name => "Mary", :last_name => "Anne", :email => "user2@example.com", :password => "user123", :phone_number => "336-692-6843"

User.create :first_name => "Sue", :last_name => "Patterson", :email => "user3@example.com", :password => "user123", :phone_number => "717-344-7575"

Task.create(
	finish_by: Time.now + 1.day,
	users_id: 2,
	chores_id: 1,
	created_at: Time.now,
	updated_at: Time.now
)

Task.create(
	finish_by: Time.now + 1.day,
	users_id: 2,
	chores_id: 2,
	created_at: Time.now,
	updated_at: Time.now
)

Task.create(
	finish_by: Time.now + 1.day,
	users_id: 1,
	chores_id: 3,
	created_at: Time.now,
	updated_at: Time.now
)

Task.create(
	finish_by: Time.now + 1.day,
	users_id: 3,
	chores_id: 4,
	created_at: Time.now,
	updated_at: Time.now
)
