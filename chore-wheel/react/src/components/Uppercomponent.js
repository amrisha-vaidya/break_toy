import React, { Component } from 'react';
import Chorefeed from './Chorefeed';
import UsersPanel from './UsersPanel';
import GeneralWheel from './GeneralWheel';
import UserWheel from './UserWheel';



class Uppercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: [""]
    };

    this.getChoreData = this.getChoreData.bind(this);
    this.setFeedUser = this.setFeedUser.bind(this);
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
    .catch(error => {
          console.error(`Error in fetch: ${error.message}`)
        }
      );
  }

  setFeedUser(user){
    this.setState({feedUser: user});
  }

  componentWillMount() {
    this.getChoreData();
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps) != JSON.stringify(this.props)){
      if (nextProps.trigger != this.props.trigger){
        this.getChoreData();
      }
    }
  }

  render(){
    let usersList;
    let user = {};
    let pieData=[];

    let displayWheel;

    if (this.state.feedUser){
      displayWheel = <UserWheel setFeedUser={ this.setFeedUser } user= { this.state.feedUser } trigger = { this.props.trigger } />
    } else {
      displayWheel = <GeneralWheel setFeedUser={ this.setFeedUser } users= { this.props.users } trigger = { this.props.trigger }/>
    }

    return(
      <div className ='row'>
        <div className='col-lg-4 col-md-4 text-center'>
          {/*<h3> user Component</h3>*/}
          <UsersPanel 
            setFeedUser={ this.setFeedUser } 
            users= { this.props.users }
            trigger = { this.props.trigger }
          />
        </div>

        <div className='col-lg-4 col-md-4 text-center'>
          { displayWheel }
        </div>

        <div className='col-lg-4'>
          <Chorefeed
            user = {this.state.feedUser}
            chores = { this.state.chores } 
            updateAll = { this.props.updateAll }
            trigger = { this.props.trigger }
          />
        </div>
      </div>
    )
  }

};

export default Uppercomponent;
