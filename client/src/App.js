import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import axios from 'axios';
import { Container, Divider, Icon, Header } from 'semantic-ui-react';
import "./page.css";

class App extends Component {
  state = { trips: [] }
  
  componentDidMount () {
    axios.get('api/trips/')
      .then( res => {
        this.setState({ trips: res.data, })
      })
  }

  addTrip = (name, start_date, end_date) => {
    axios.post('/api/trips', { name, start_date, end_date })
    .then( res => {
      const { trips } = this.state;
      this.setState({ trips: [res.data, ...trips] });
    })
  }

  updateTrip = ({id, name, start_date, end_date}) => {
    axios.put(`/api/trips/${id}`, { id, name, start_date, end_date })
    .then( res => {
      const trips = this.state.trips.map( trip => {
      if (trip.id === id)
        return res.data;
      return trip;
    });
    this.setState({ trips, editing: false, });
  })
  }

  deleteTrip = (id) => {
    axios.delete(`/api/trips/${id}`)
    .then ( res => {
      const { trips, } = this.state;
      this.setState({ trips: trips.filter( t => t.id !== id) })
    })
  }


  render() {
    return (
      <Container className="contain" style={{ padding: "30px 0" }}>
        <h1><Icon name='paper plane outline' size='large' /> Team Awesome's Trip Planner</h1>
        <TripList trips={this.state.trips} editTrip={this.updateTrip} deleteTrip={this.deleteTrip} />
        <br />
        <TripForm addTrip={this.addTrip} />
        <Divider />
      </Container>
    );
  }
}

export default App;
