import React, { Component } from 'react';

import Chrono from './components/chrono.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      //this is the area where the chrono will be defined,
      //as well as the api login info and test info will be defined
    }
  }
  onClick(button){
    this.setState({
      //this is the part where when you log into the api, it'll
      //get rid of this App component, and show Chrono.
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">WOD CLOCK</h1>
        </header>
        <p className="App-intro">
            Welcome to WOD Clock! This is an app designed to make
            your Crossfit workouts easier by providing your workout
            of the day information right next to the stopwatch clock.
            No more white boards and watching the wall clock for you!
            Please feel free to login to your gym's Wodify below
            or use [info for test login] if you don't have a Crossfit Gym.

        </p>
        <p className="App-login">
            [Placeholder for API info for Wodify login screen]
            
        </p>
        <Chrono  />
      </div>
    );
  }
}

export default App;
