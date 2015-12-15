import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import { Row, Col, Image, Table } from 'react-bootstrap';

import CourseRow from './CourseRow.jsx';

let CoursesList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    return {
      courses: (new Parse.Query('Course')).ascending('number')
    };
  },

  render() {
    return(
      <Row className='courses-container'>
        <Col md={12}>
          <h2>Courses</h2>
        </Col>
        <Col md={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>
              {this.data.courses.map(function(course) {
                return <CourseRow key={course.objectId} course={course} />;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );

  }
});

export default CoursesList;