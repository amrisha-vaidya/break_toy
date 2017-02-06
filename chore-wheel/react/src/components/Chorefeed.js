import React, { Component } from  'React';

class Chorefeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    };

    this.getTasksData = this.getTasksData.bind(this)
  }

  getTasksData(){
    fetch(`/api/v1/tasks/fetch_user_chores?users_id=4`, {
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

  componentWillMount() {
    this.getTasksData();
  }

  render(){
    let choreFeed;
    let user = this.props.user;
    let tasks = this.state.tasks;
    if (user){
      if (tasks) {
        choreFeed = tasks.map((task, i) =>
        <li key={i}>{ task.chore.title }</li>
      );

      }

    }

    return(
      <div>
        <h3> Chore Status </h3>
        <ul>
          { choreFeed }
        </ul>
      </div>
    )
  }
}


export default Chorefeed;

// <ListItem value={number} />
