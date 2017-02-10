# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chore.create(
title: "Take out trash",
description:"Trash day is thursdays and mondays, please take out trash by 7 pm night before",
created_at: Time.now,
updated_at: Time.now
)

Chore.create(
title: "Clean the common area",
description:"Please put away all board games and vacumm the area",
created_at: Time.now,
updated_at: Time.now
)

Chore.create(title: "Clean Up Bathroom",
description:"Gloves and cleaning materials are under the sink",
created_at: Time.now,
updated_at: Time.now
)

Chore.create(title: "Take out cat litter",
description:"Clean up the litter box every wednesday",
created_at: Time.now,
updated_at: Time.now
)

Chore.create(title: "Swiffer Kitchen area",
description:"Swiffer is in the cupboard, please mop the floor with it.",
created_at: Time.now,
updated_at: Time.now
)
