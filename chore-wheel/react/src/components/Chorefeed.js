import React, { Component } from  'React';

class Chorefeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    };

    this.getTasksData = this.getTasksData.bind(this)
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

  render(){
    let choreFeed;
    let user = this.props.user;
    let first_name = user ? user.first_name : null;
    let tasks = this.state.tasks;
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

    return(
      <div>
        <div className='large-12 columns text-center'>
          <h3> Chore Status </h3>
        </div>

        <div className='large-12 columns text-center'>
          <h5> { first_name } </h5>
        </div>

        <div className='row columns'>
          <div className='large-12 columns'>
            <table>
              <tbody>
                { choreFeed }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default Chorefeed;
