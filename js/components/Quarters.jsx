import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Row, Col, Image, } from 'react-bootstrap';

import Quarter from './Quarter.jsx';

let QuartersList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    return {
      quarters: (new Parse.Query('Quarter')).notEqualTo('season', 'Summer').ascending('order')
    };
  },

  render() {
    return(
      <Row className='quarters-container'>
        <Col md={12}>
          <h2>Quarters</h2>
        </Col>
        {this.data.quarters.map(function(quarter) {
          return <Quarter key={quarter.objectId} quarter={quarter} />;
        })}
      </Row>
    );

  }
});

export default QuartersList;