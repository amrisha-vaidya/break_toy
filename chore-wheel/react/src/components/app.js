import React, { Component } from 'react';
import Uppercomponent from './Uppercomponent';
import Lowercomponent from './Lowercomponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.getUsersData = this.getUsersData.bind(this);
    this.updateAll = this.updateAll.bind(this);
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

  updateAll(){
    this.setState({trigger: Date.now()})
  }

  render() {
    return(
      <div>

        <div className='row '>
          <div className='large-12 large-centered columns'>
            < Uppercomponent
            users = { this.state.users } />
          </div>
        </div>

        <div className='row '>
          <div className='large-12 large-centered columns'>
            < Lowercomponent updateAll= { this.updateAll } />
          </div>
        </div>



      </div>
    )
  }
}

export default App;
