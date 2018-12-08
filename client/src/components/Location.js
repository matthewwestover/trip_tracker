import React from 'react';
import LocationForm from './LocationForm';
import { Card, Button, Icon } from 'semantic-ui-react'

class Location extends React.Component {
  state = { addresses: [], editing: false, }

  toggleLocationEdit = () => this.setState({editing: !this.state.editing})
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