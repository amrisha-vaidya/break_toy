import React, { Component } from 'react';
import Chorefeed from './Chorefeed'

class Uppercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  setFeedUser(user){
    this.setState({feedUser: user});
  }


  render(){
    let usersList;
    let user = {};
    if (this.props.users) {
      usersList = this.props.users.map((user, i) =>
      <li key={i} onClick= {()=>this.setFeedUser(user)}> {user.first_name} </li>
      );
    }


    return(
      <div className ='row'>
        <div className='large-6 columns'>
          <h3>Wheel Component </h3>
          <ul> { usersList }</ul>
        </div>

        <div className='large-6 columns'>
         < Chorefeed
         user = {this.state.feedUser} />
        </div>
      </div>
    )
  }

};

export default Uppercomponent;
