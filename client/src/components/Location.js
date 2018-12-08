import React from 'react';
import LocationForm from './LocationForm';
import Address from './Address'
import axios from 'axios'
import { Card, Button, Icon } from 'semantic-ui-react'

class Location extends React.Component {
  state = { addresses: [], editing: false, }

  toggleAddressEdit = () => this.setState({editing: !this.state.editing})
  
  componentDidMount() {
    let { id } = this.props
    let { trip_id } = this.props.trip_id
    axios.get(`/api/trips/${trip_id}/locations/${id}/addresses`)
      .then(res => {
        this.setState({ addresses: res.data, editing: false, })
      })
  }

  addAddress = (id, trip_id, street, city, state, zip ) => {
    axios.post(`/api/trips/${trip_id}/locations/${id}/addresses`, { street, city, state, zip })
      .then( res => {
        const { addresses } = this.state;
        this.setState({ addresses: [...addresses, res.data], editing:false, })
      })
  }

  updateAddress = ({id, trip_id, location_id,  street, city, state, zip}) => {
    axios.put(`/api/trips/${trip_id}/locations/${location_id}/addresses/${id}`, { id, trip_id, location_id,  street, city, state, zip })
    .then( res => {
      const addresses = this.state.addresses.map( address => {
      if (address.id === id)
        return res.data;
      return address;
    });
    this.setState({ addresses, editing: false, });
  })
  }

  deleteLocation = (trip_id, id) => {
    axios.delete(`/api/trips/${trip_id}/locations/${id}`)
      .then(res => {
        const { locations, } = this.state;
        this.setState({ locations: locations.filter(t => t.id !== id) })
      })
  }

  render () {
    return (
      <Card.Content>
        {
          this.state.editing ?
          <LocationForm {...this.props } toggleEdit={this.toggleLocationEdit} />
          :
          <Card.Content>
            <Card.Header as="h3">
              { this.props.name } 
            </Card.Header>
              Days: {this.props.days}
          </Card.Content>
        }
              <Button.Group size="tiny" floated="right">
              <Button icon color="blue" onClick={this.toggleLocationEdit}>
                  <Icon name="edit" /> Edit
                </Button>
                <Button icon color="red" onClick={() => this.props.deleteLocation(this.props.trip_id, this.props.id)}>
                  <Icon name="trash" /> Delete
                </Button>
              </Button.Group>
            <Card.Meta>
              Address
            </Card.Meta>
      </Card.Content>
    )
  }
}

export default Location;