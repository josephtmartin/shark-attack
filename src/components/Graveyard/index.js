import React, { Component } from 'react';
import GraveStone from '../GraveStone';

export default class Graveyard extends Component {
  render() {
    const { deadStudent } = this.props;
    const renderStudentToGraveDom = () => deadStudent.map((student) => <GraveStone key={student.id} deadStudent={student} />);
    return (
      <div className='graveyard-container'>
        <h2>Graveyard</h2>
        <div className='graveyard'>
          {renderStudentToGraveDom()}
        </div>
      </div>
    );
  }
}
