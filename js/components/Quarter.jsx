import React from 'react';
import { Row, Col, Panel, Image, Table } from 'react-bootstrap';
import classNames from 'classnames';

let Quarter = React.createClass({

  render() {
    const quarter = this.props.quarter;

    const liClass = classNames({
      'patron-avatar-list-item': true,
      'selected': this.props.isSelected
    });

    return(
      <Col md={4}>
        <Panel header={quarter.season + ' ' + quarter.year }>
          Some default panel content here.
          <Table fill>

          </Table>
          Some more panel content here.
        </Panel>
      </Col >
    );

  }
});

export default Quarter;