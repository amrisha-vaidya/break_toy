import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class Wheel extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	data: {
				labels: [
					'Red',
					'Green',
					'Yellow'
				],
				datasets: [{
					data: [300, 50, 100],
					backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
					],
					hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
					]
				}]
			}
    }
  }

  render(){
  	return (
  		<div>
      	<h2>Doughnut Example</h2>
      	<Doughnut data={this.state.data} />
    	</div>
    )
  }
}

export default Wheel;