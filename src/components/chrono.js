import React, { Component } from 'react';


class Chrono extends Component {
  render() {
    return (
      <div className="Chrono-main">
        <h1>"3...2...1..."<button>GO!</button></h1>
          <p className="Chrono-clock">
              <h1>"[Contains the clock]"</h1>
          </p>
          <p className="Chrono-times">
              <h2>"Contains the saved times when stop is selected"</h2>
              <h2>"00:00", "12:05"</h2>
          </p>
          <p className="Chrono-API">
              <h2>"Contains the API accessed WOD info from Wodify."</h2>
              <h2>"The WOD of the day is..."</h2>
          </p>
      </div>
    );
  }
}

export default Chrono;
