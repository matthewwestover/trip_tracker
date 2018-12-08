import React from 'react';
import TripForm from './TripForm';
import { Button, Icon, Card, Header } from 'semantic-ui-react';

class Trip extends React.Component {
  state = {editing: false, };

  toggleTripEdit = () => this.setState({ editing: !this.state.editing })

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
          Locations Name - Locations Date EDIT LOCATION BUTTON DELETE BUTTON
            Address Data EDIT ADDRESS BUTTON DELETE BUTTON
        </Card.Content>
        <Card.Content extra>
          <Button icon color="green" fluid>
            <Icon name="pencil" /> New Location
          </Button>
          <Button.Group fluid>
            <Button icon color="blue" onClick={this.toggleTripEdit}>
              <Icon name="edit" /> Edit
            </Button>
            <Button icon color="red" onClick={() => this.props.deleteTrip(this.props.id)}>
              <Icon name="trash" /> Delete
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}
export default Trip;