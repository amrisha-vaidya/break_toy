import React, { Component } from  'React';

class Chorefeed extends Component {
  constructor(props){
    super(props);
    this.state = {
      chores: []
    };

    this.getChoresData = this.getChoresData.bind(this)
  }

  getChoresData(){
    fetch(`/api/v1/chores/fetch_user_chores`, {
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
      let chores = body;
      this.setState({ chores: chores });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillMount() {
    this.getChoresData();
  }

  render(){
    let choreFeed;
    let currentUser = this.props.user;
    debugger;
    if (currentUser){
      let chores = currentUser.chores;

      if (chores) {
        choreFeed = chores.map((chore, i) =>
        <li key={i}>{ chore.title }</li>
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
