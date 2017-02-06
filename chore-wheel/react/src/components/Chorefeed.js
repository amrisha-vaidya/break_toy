import React, { Component } from  'React';

class Chorefeed extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    let choreFeed;
    let currentUser = this.props.user;
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
