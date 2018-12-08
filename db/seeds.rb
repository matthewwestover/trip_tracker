Trip.create(name: "Hawaii", start_date: "Jan 5th 2019", end_date: "Jan 15th 2019")
Trip.find(1).locations.create(name: "Waimea Canyon", days: 1, trip_id: 1)
Location.find(1).addresses.create(street: "Waimea Canyon Drive", city: "Waimea", state: "Hawaii", zip: 96796, location_id: 1)

# Menu.find(1).items.create(name: "French Toast")