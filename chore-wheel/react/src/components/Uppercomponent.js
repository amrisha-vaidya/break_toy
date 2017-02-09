import React, { Component } from 'react';
import Chorefeed from './Chorefeed';
import {PieChart} from 'react-easy-chart';

class Uppercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: []
    };

    this.getChoreData = this.getChoreData.bind(this);
  }

  getChoreData(){
    fetch(`/api/v1/chores/fetch_chores`,{
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let newChores = body;
      this.setState({ chores: newChores});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  setFeedUser(user){
    this.setState({feedUser: user});
  }

  componentWillMount() {
    this.getChoreData();
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
      <div className ='row align-middle'>
        <div className='large-6 columns medium-3 columns small-2 columns'>
        <br />
          <PieChart
             labels
             styles={{
              '.chart_lines': {
                strokeWidth: 30
              },
              '.chart_text': {
                fontFamily: 'serif',
                fontSize: '1.25em',
                fill: '#333'
              }
            }}
             data={ pieData }
             innerHoleSize={190}
             clickHandler={
               (d) => this.setState( {feedUser: d.data.user} )
             }
           />

        </div>

        <div className='large-6 columns' id='chore-status-panel'>
         < Chorefeed
         user = {this.state.feedUser}
         chores = { this.state.chores } />
        </div>
      </div>
    )
  }

};

export default Uppercomponent;
