import React from 'react';
import TripForm from './MenuForm';
import { Button, Icon, Card, } from 'semantic-ui-react';

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
              <Card.Header>{ this.props.name }</Card.Header>
             <Card.Meta>{ this.props.start_date } - { this.props.end_date }</Card.Meta>
            </Card.Content>
          }
        </Card.Content>
        <Card.Content>
          Locations Name - Locations Date EDIT LOCATION BUTTON
          Address Data EDIT ADDRESS BUTTON
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button icon color="green">
              <Icon name="pencil" /> New Location
            </Button>
            <Button icon color="blue" onClick={this.toggleEdit}>
              <Icon name="edit" /> Edit
            </Button>
            <Button icon color="red" onClick={() => this.props.deleteMenu(this.props.id)}>
              <Icon name="trash" /> Delete
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}
export default Trip;