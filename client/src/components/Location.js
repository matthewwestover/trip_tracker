import React from 'react';
import LocationForm from './LocationForm';
import { Header, } from 'semantic-ui-react'
import TripForm from './TripForm';

class Location extends React.Component {
    state = {
        locations: []
    };

    renderLocations = () => {
        return this.state.locations.map(location => <Location key={location.id} {...location} updateLocation={this.updateLocation} deleteLocation={this.deleteLocation} />);
    }

    addLocation = (locationData) => {
        const { locations, } = this.state;
        const location = { id, ...locationsData, };
        this.setState({ locations: [location, ...locations] })
    }

    updateLocation = (locationData) => {
        const locations = this.state.locations.map(location => {
            if (location.id === locationData.id)
                return locationData;
            return location;
        })
        this.setState({ locations, });

    }

    deleteLocation = (id) => {
        const location = this.state.locations.filter(location => {
            if (location.id !== id)
                return location;
        })
        this.setState({
            location: []
        });

    }

    render() {
        return (
            <div>
                <Header as='h1'>LocationForm Change This Name</Header>
                <LocationFrom addLocation={this.addLocation} />
                {this.renderLocations()}
            </div>
        )
    }

}

export default Location;