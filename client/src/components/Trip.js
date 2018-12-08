import React from 'react';
import TripForm from './TripForm';
import Location from './Location';
import axios from 'axios';
import { Button, Icon, Card, Header } from 'semantic-ui-react';

class Trip extends React.Component {
  state = { locations: [], editing: false, };

  toggleTripEdit = () => this.setState({ editing: !this.state.editing })

  componentDidMount() {
    let { id } = this.props.id
    axios.get(`/api/trips/${id}/locations`)
      .then(res => {
        this.setState({ locations: res.data, editing: false, })
      })
  }

  addLocation = (id, name, days) => {
    axios.post(`/api/trips/${id}/locations`, { name, days })
      .then( res => {
        const { locations } = this.state;
        this.setState({ locations: [...locations, res.data], editing:false, })
      })
  }

  updateLocation = ({id, trip_id, name, days}) => {
    axios.put(`/api/trips/${trip_id}/locations/${id}`, { id, trip_id, name, days })
    .then( res => {
      const locations = this.state.locations.map( location => {
      if (location.id === id)
        return res.data;
      return location;
    });
    this.setState({ locations, editing: false, });
  })
  }

  deleteLocation = (trip_id, id) => {
    axios.delete(`/api/menus/${trip_id}/items/${id}`)
      .then(res => {
        const { locations, } = this.state;
        this.setState({ locations: locations.filter(t => t.id !== id) })
      })
  }

  render () {
    return (
      <Card>
        <Card.Content>
          {
            this.state.editing ?
            <TripForm {...this.props } toggleEdit={this.toggleTripEdit} />
            :
            <Card.Content>
              <Card.Header textAlign="center"><Header as="h1">{ this.props.name }</Header></Card.Header>
             <Card.Meta textAlign="center">{ this.props.start_date } - { this.props.end_date }</Card.Meta>
            </Card.Content>
          }
        </Card.Content>
        <Card.Content>
          {
            this.state.locations.map ( location =>
              <Location
              key={location.id}
              {...location}
              addLocation={this.addLocation} 
              updateLocation={this.updateLocation} 
              deleteLocation={this.deleteLocation} 
              />
              )
          }
        </Card.Content>
        <Card.Content extra>
          
          <Button.Group fluid>
            <Button icon color="blue">
              <Icon name='paper plane outline' />
            </Button>
            <Button icon color="teal" onClick={this.toggleTripEdit}>
              <Icon name="edit" /> 
            </Button>
            <Button icon color="purple" onClick={() => this.props.deleteTrip(this.props.id)}>
              <Icon name="trash" /> 
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}
export default Trip;