import React from 'react';
import './App.scss';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';
import data from '../helpers/data/studentsData';

class App extends React.Component {
  state = {
    liveStudents: [],
    deadStudents: [],
  };

  componentDidMount() {
    this.getLiveStudents();
    this.getDeadStudents();
  }

  getLiveStudents = () => {
    data.livingStudents().then((response) => this.setState({ liveStudents: response }));
  }

  getDeadStudents = () => {
    data.dearlyBeloved().then((response) => this.setState({ deadStudents: response }));
  }

  followTheLight = () => {
    const randomStudent = this.state.liveStudents[
      Math.floor(Math.random() * this.state.liveStudents.length)
    ];
    const newStudentsArray = this.state.liveStudents.filter(
      (student) => student !== randomStudent,
    );
    this.setState({
      liveStudents: newStudentsArray,
      deadStudents: this.state.deadStudents.concat(randomStudent),
    });
  };

  render() {
    const { liveStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <SharkTank key={liveStudents.id} liveStudent={liveStudents} followTheLight={this.followTheLight} />
        <Graveyard key={deadStudents.id} deadStudent={deadStudents} />
      </div>
    );
  }
}

export default App;
