import React, { Component } from 'react';

class Uppercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render(){
    let usersList;
    debugger;
    if (this.props.users) {
      usersList = this.props.users.map((user) =>
        <li> {user.first_name} </li>
      );
    }
    console.log(usersList);
    return(
      <div className ='row'>
        <div className='large-6 columns'>
          <h3>Wheel Component </h3>
        </div>
        <div className='large-6 columns'>
          <ul>{ usersList }</ul>
        </div>s
      </div>
    )
  }

};

export default Uppercomponent;

// const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
