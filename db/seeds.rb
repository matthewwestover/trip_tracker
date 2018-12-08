Trip.create(name: "Hawaii", start_date: "Jan 5th 2019", end_date: "Jan 15th 2019")
Location.create(name: "Waimea Canyon", days: 1, trip_id: 1)
Address.create(street: "Waimea Canyon Drive", city: "Waimea", state: "Hawaii", zip: 96796, location_id: 1)

Trip.create(name: "Oregon", start_date: "March 20th 2019", end_date: "March 30th 2019")
Location.create(name: "Crater Lake National Park", days: 1, trip_id: 2)
Address.create(street: "Crater Lake Road", city: "Klamath Falls", state: "Oregon", zip: 74830, location_id: 2)

Trip.create(name: "London", start_date: "June 20th 2019", end_date: "July 30th 2019")
Location.create(name: "Big Ben", days: 4, trip_id: 3)
Address.create(street: "Westminster", city: "London", state: "UK", zip: 12344, location_id: 3)

# Menu.find(1).items.create(name: "French Toast")