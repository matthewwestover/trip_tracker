Trip.create(name: "Hawaii", start_date: "Jan 5th 2019", end_date: "Jan 15th 2019")
Trip.find(1).locations.create(name: "Waimea Canyon", days: 1, trip_id: 1)
Location.find(1).addresses.create(street: "Waimea Canyon Drive", city: "Waimea", state: "Hawaii", zip: 96796, location_id: 1)

Trip.create(name: "Oregon", start_date: "March 20th 2019", end_date: "March 30th 2019")
Trip.find(2).locations.create(name: "Crater Lake National Park", days: 1, trip_id: 2)
Location.find(2).addresses.create(street: "Crater Lake Road", city: "Klamath Falls", state: "Oregon", zip: 74830, location_id: 2)

# Menu.find(1).items.create(name: "French Toast")