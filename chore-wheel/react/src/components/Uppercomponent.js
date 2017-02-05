import React, { Component } from 'react';

class Uppercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render(){
    return(
      <div className ='row'>
        <div className='large-6 columns'>
          <h3>Wheel Component </h3>
        </div>
        <div className='large-6 columns'>
          <h3>Update Feed Component </h3>
        </div>
      </div>
    )
  }

};

export default Uppercomponent;
