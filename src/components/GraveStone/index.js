import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import studentShape from '../../helpers/props/studentShape';

export default class GraveStone extends Component {
  static propTypes = {
    student: studentShape,
  }

  render() {
    const { deadStudent } = this.props;
    return (
      <Card className="graveStoneCard">
        <CardBody>
          <CardTitle tag='h3'>{deadStudent.firstName} {deadStudent.lastName}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
