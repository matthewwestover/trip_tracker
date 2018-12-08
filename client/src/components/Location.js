import React from 'react';
import LocationForm from './LocationForm';
import { Card, } from 'semantic-ui-react'

class Location extends React.Component {
  render () {
    return (
      <Card.Content>
        <Card.Header>
          { this.props.name } --- {this.props.days}
        </Card.Header>
        <Card.Meta>
          Address
        </Card.Meta>
      </Card.Content>
    )
  }
}

export default Location;