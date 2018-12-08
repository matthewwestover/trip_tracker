import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import { Container, Divider } from 'semantic-ui-react';


class App extends Component {
  state = { trips: [], locations: [], addresses: [] }

  componentDidMount () {

  }

  addTrip = (name, start_date, end_date) => {

  }

  updateTrip = () => {

  }

  deleteTrip = () => {

  }

  addLocation = () => {

  }

  updateLocation = () =>{

  }

  deleteLocation= () => {

  }

  addAddress = () => {

  }

  updateAddress = () => {

  }

  deleteAddress = () => {

  }


  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <h1>Team Awesome's Trip Planner</h1>
        <TripForm addTrip={this.addTrip} />
        <Divider />
        <br />
        <TripList trips={this.state.trips} editTrip={this.updateTrip} deleteTrip={this.deleteMenu} />
      </Container>
    );
  }
}

export default App;
