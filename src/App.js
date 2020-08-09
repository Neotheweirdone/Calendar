import React, { Component } from 'react';
import './App.css';

import CalendarEvent from './components/CalendarEvent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CalendarEvent />
      </div>
    );
  }
}

export default App;
