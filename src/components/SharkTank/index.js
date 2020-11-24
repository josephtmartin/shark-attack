import React, { Component } from 'react';
import LiveStudent from '../LiveStudent';

export default class SharkTank extends Component {
  render() {
    const { liveStudent, followTheLight } = this.props;
    const renderStudentToTankDom = () => liveStudent.map((student) => <LiveStudent key={student.id} liveStudent={student} />);
    return (
      <div className='shark-tank-container'>
        <h2>Shark Tank</h2>
        <div className='sharkTank'>
        <button className='btn btn-danger' onClick={followTheLight}>
            SHARK ATTACK!!!
        </button>
          <div className='shark-cards'>{renderStudentToTankDom()}</div>
        </div>
      </div>
    );
  }
}
