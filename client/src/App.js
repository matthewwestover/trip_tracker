import React, { Component } from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';
import axios from 'axios';
import { Container, Divider } from 'semantic-ui-react';


class App extends Component {
  state = { trips: [] }

  componentDidMount () {
    axios.get(`api/trips`)
      .then( res => {
        this.setState({ trips: res.data })
      })
  }

  addTrip = (name, start_date, end_date) => {
    axios.post('/api/', { name, start_date, end_date })
    .then( res => {
      const { trips } = this.state;
      this.setState({ trips: [res.data, ...trips] });
    })
  }

  updateTrip = ({id, name, start_date, end_date}) => {
    axios.put(`/api/trips/${id}`, { name, start_date, end_date })
    .then( res => {
      const trips  = this.state.trips.map( t => {
        if (t.id === id)
          return res.data
        return t;
      })
      this.setState({ trips, })
    })
  }

  deleteTrip = (id) => {
    axios.delete(`/api/trips/${id}`)
    .then( res => {
      const { trips } = this.state;
      this.setState({trips: trips.filter(t => t.id !== id) })
    })
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
