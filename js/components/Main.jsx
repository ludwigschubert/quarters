import React from 'react';
import { Grid } from 'react-bootstrap';

import Quarters from './Quarters.jsx';
import Courses from './Courses.jsx';
import Navigation from './Navigation.jsx';

let Main = React.createClass({

  render() {
    return(
      <div id="main">
        <Navigation />
        <Grid fluid>
          <Quarters />
          <Courses />
        </Grid>
      </div>
    );
  }
});

export default Main;