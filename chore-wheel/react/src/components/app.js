import React, { Component } from 'react';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentUser: null,
      // chores = [],
      // taks = [],

    };
  }

  render() {
    return(
      <Navigation />
    )
  }
}

export default App;
