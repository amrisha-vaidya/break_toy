import React, { Component } from 'react';
import Chorefeed from './Chorefeed';
import {PieChart} from 'react-easy-chart';

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
    let pieData=[];

    if (this.props.users) {
      usersList = this.props.users.map((user, i) =>
      <li key={i} onClick= {()=>this.setFeedUser(user)}> {user.first_name} </li>
      );

      let value = 360 / this.props.users.length;
      this.props.users.forEach(function(user){
        let datum = {key: user.first_name, value:value, user:user};
        pieData.push(datum);
      })
    }


    return(
      <div className ='row'>
        <div className='large-6 columns'>
          <h3>Wheel Component </h3>
          <PieChart
             labels
             data={ pieData }
             innerHoleSize={200}
             clickHandler={
               (d) => this.setState( {feedUser: d.data.user} )
             }
           />
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
