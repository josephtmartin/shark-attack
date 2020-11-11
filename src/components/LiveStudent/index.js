import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import studentShape from '../../helpers/props/studentShape';

export default class LiveStudent extends Component {
  static propTypes = {
    student: studentShape,
  }

  render() {
    const { liveStudent } = this.props;
    return (
      <Card className="liveStudentCard">
        <CardBody>
          <CardTitle tag='h3'>{liveStudent.firstName} {liveStudent.lastName}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
