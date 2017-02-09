import React, { Component } from  'React';

class UsersPanel extends React.Component {
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
          <div key={i} className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 bot-buffer" onClick= {()=>this.props.setFeedUser(user)}>
            <a href="#" className="btn btn-info btn-lg btn-block btn-huge">{user.first_name}</a>
          </div>
      );
    }

    return(
      <div className="row">
        <div className='col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1  '>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4> Members </h4>
              <small></small>
            </div>
            <div className="panel-body">
              <div className='row'>
                <div className='col-lg-12 col-md-12 scroll-div'>
                    { usersList }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UsersPanel;
