import React from 'react';
import { Card } from 'semantic-ui-react';

class Location extends React.Component {
  state = {editing: false, }

  toggleLocationEdit = () => this.setState({ editing: !this.state.editing })

  render () {
    return (
      <Card.Header>{ location.name }</Card.Header>
    )
  }
}

export default Location;