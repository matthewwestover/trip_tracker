import React from 'react'; 
import Trip from './Trip';
import { Grid, } from 'semantic-ui-react';

const TripList = ({ trips, editTrip, deleteTrip }) => (
  <Grid columns={3} centered>
  {
    trips.map ( trip => 
      <Grid.Column width={5}>
        <Trip 
        key={trip.id}
        {...trip}
        editTrip={editTrip}
        deleteTrip={deleteTrip}
        />
      </Grid.Column>
    )
  }
  </Grid>
);

export default TripList;