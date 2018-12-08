import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import axios from 'axios';
import { Container, Divider } from 'semantic-ui-react';


class App extends Component {
  state = { trips: [] }

  componentDidMount () {
    axios.get('/api/trips')
      .then( res => {
        this.setState({ trips: res.data, })
      })
  }

  addTrip = (name, start_date, end_date) => {

  }

  updateTrip = () => {

  }

  deleteTrip = () => {

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
