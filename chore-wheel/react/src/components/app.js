import React, { Component } from 'react';
import Navigation from './Navigation';
import Uppercomponent from './Uppercomponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };

    this.getUsersData = this.getUsersData.bind(this);
  }

  getUsersData(){
    fetch(`/api/v1/users/fetch_users`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let newUsers = body;
      this.setState({ users: newUsers });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillMount() {
    this.getUsersData();
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className='large-12'>
            < Uppercomponent />
          </div>
        </div>
        <div className='row'>
          <div className='large-12'>
            <h1> lower component </h1>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
