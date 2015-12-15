import React from 'react';
import { Row, Col, Panel, Image, Table } from 'react-bootstrap';


let CourseEnrollButton = React.createClass({

  render() {
    const course = this.props.course;
    const quarter = this.props.quarter;

    return(
      <span>
        {quarter.season + ' ' + quarter.year}
      </span>
    );

  }
});

export default CourseEnrollButton;