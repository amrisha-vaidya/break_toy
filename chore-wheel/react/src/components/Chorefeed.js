import React, { Component } from  'React';
import NewTask from './NewTask';

class Chorefeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      showAssignForm: false
    };

    this.getTasksData = this.getTasksData.bind(this);
    this.turnShowAssignFormOn = this.turnShowAssignFormOn.bind(this);
    this.turnShowAssignFormOff = this.turnShowAssignFormOff.bind(this);
  }

  getTasksData(user){
    let user_id = user ? user.id : null;
    fetch(`/api/v1/tasks/fetch_user_chores?users_id=` + user_id, {
      credentials: 'same-origin'
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}, (${response.statusText})`;
        let error = newError(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let tasks = body;
      this.setState({ tasks: tasks });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps) != JSON.stringify(this.props)){
      this.getTasksData(nextProps.user);
    }
  }

  turnShowAssignFormOn(event){
    let that = this;
    that.setState({showAssignForm: true});
  }

  turnShowAssignFormOff(event){
    let that = this;
    that.setState({showAssignForm: false});
  }

  render(){
    let choreFeed;
    let user = this.props.user;
    let first_name = user ? user.first_name : null;
    let tasks = this.state.tasks;

    let assignChoreButton;
    if (user){
      assignChoreButton=
      <tr>
        <td className='text-muted'>
          <span onClick= { this.turnShowAssignFormOn }>
            <i className='fa fa-plus'></i>&nbsp;Assign a chore...
          </span>
        </td>
        <td> </td>
      </tr>
    } 

    if (user){
      if (tasks) {
        choreFeed = tasks.map((task, i) =>
          <tr key={i}>
          <td> { task.chore.title } </td>
          <td className='text-center'> {task.completed ? <strong><i className='fa fa-check'></i>&nbsp;Complete</strong> : 'Not Completed Yet'} </td>
          </tr>
        );
      }
    }

    let toShow;
    if (this.state.showAssignForm){
      toShow = <NewTask chores = { this.props.chores }/>
    } else {
      toShow = assignChoreButton;
    }

    return(

      <div className="row">
        <div className='col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1  '>
          <div className="panel panel-primary">
            <div className="panel-heading text-center">
              <h4> Chore Status </h4>
              <small> { first_name } </small>
            </div>
            <div className="panel-body">
              <div className='row'>
                <div className='col-lg-12 col-md-12 scroll-div'>
                  <table className='table table-striped'>
                    <tbody>
                      { choreFeed }

                      { toShow }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Chorefeed;
