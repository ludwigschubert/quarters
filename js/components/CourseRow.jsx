import React from 'react';
import { Row, Col, Panel, Image, Table } from 'react-bootstrap';
import classNames from 'classnames';

import CourseEnrollButton from './CourseEnrollButton.jsx'

let CourseRow = React.createClass({

  render() {
    const course = this.props.course;

    return(
      <tr>
        <td>{[course.subject, course.code].join(" ")}</td>
        <td>{course.title}</td>
        <td>nothing</td>
      </tr>
    );

  }
});

export default CourseRow;