import React, { Component } from 'react';
import NewChoreForm from './NewChoreForm';

class Lowercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	showForm: false,
    };

    this.turnShowFormOn = this.turnShowFormOn.bind(this);
    this.turnShowFormOff = this.turnShowFormOff.bind(this);
  }

  turnShowFormOn(event){
  	let that = this;
  	that.setState({showForm: true});
  }

  turnShowFormOff(event){
  	let that = this;
  	that.setState({showForm: false});
  }

  render(){

  	let addChoreButton =
  		<div className='col-lg-12 col-md-12'>
  				<hr />
					<span className='text-muted'>
						<h5>
							<span onClick= { this.turnShowFormOn }>
							<i className='fa fa-plus fa-small text-disabled'>
							</i> Add a chore
							</span>
						</h5>
  				</span>
  		</div>

  	let toShow;
  	if (this.state.showForm){
  		toShow = <NewChoreForm updateAll={ this.props.updateAll } turnShowFormOff={ this.turnShowFormOff } />
  	} else {
  		toShow = addChoreButton
  	}


  	return(
  		<div className='row text-center'>
  			{ toShow }
  		</div>
		)
  }
};

export default Lowercomponent;
