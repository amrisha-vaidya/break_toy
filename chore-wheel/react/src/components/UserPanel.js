import React, { Component } from  'React';

class UserPanel extends React.Component {
  constructor(props){
    super(props)
    this.state= {};

  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps) != JSON.stringify(this.props)){
      let users = nextProps.users;
    }
  }

  render(){
    let usersList;
    let user = {};

    if (this.props.users) {
      usersList = this.props.users.map((user, i) =>
      <li key={i} onClick= {()=>this.props.setFeedUser(user)}> {user.first_name} </li>
      );
    }


    return(
      <div className="row">
        <div className='col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1  '>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4> Members </h4>
              <small></small>
            </div>
            <div className="panel-body">
              <ul>
                { usersList }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPanel;
