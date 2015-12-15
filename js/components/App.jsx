import React from 'react';
import { Grid } from 'react-bootstrap';

let App = React.createClass({

  render() {
    return(
      <div>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }

});

export default App;
