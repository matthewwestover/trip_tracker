import React from 'react';
import { Card, Button, Icon, } from 'semantic-ui-react';
// import AddressForm from './AddressForm';

class Address extends React.Component {

    render() {
        return (
            <Card.Content>
                <Card.Meta>
                    Street: {this.props.street}
                    <br />
                    City: {this.props.city}
                    <br />
                    State: {this.props.state}, Zip: {this.props.zip}
                </Card.Meta>
                <Button.Group size="tiny" floated="right">
                    <Button icon color="blue" onClick={this.toggleAddressEdit}>
                        <Icon name="edit" /> Edit
                    </Button>
                    <Button icon color="red" onClick={() => this.props.deleteAddress(this.props.trip_id, this.props.location_id, this.props.id)}>
                        <Icon name="trash" /> Delete
                    </Button>
                </Button.Group>
          </Card.Content>
        )
    }
}

export default Address;

