import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class GeneralWheel extends Component {
  constructor(props) {
    super(props)
    let backgroundColors = ['#FF6384','#36A2EB','#FFCE56'];
    let hoverBackgroundColors= ['#FF6384','#36A2EB','#FFCE56'];

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
  		backgroundColors: ['#FF6384','#36A2EB','#FFCE56'],
  		hoverBackgroundColors: ['#FF6384','#36A2EB','#FFCE56'],

    	chartData: {
			},

			chartOptions:{
				legend:{
					onClick: this.clickHandler
				}
			}
    }
  }

  clickHandler(event, legendItem){
  	this.props.setFeedUser(this.state.users[legendItem.index]);
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps) != JSON.stringify(this.props)){
    	let users = nextProps.users;
    	let userFirstNames = users.map((user, i) =>
      	user.first_name
      );
    	let equalDegree = 360/users.length;
      let degrees = users.map((user, i) =>
      	equalDegree
      );

    	let nextChartData= {
    		labels: userFirstNames,
    		datasets: [{
					data: degrees,
					backgroundColor: this.state.backgroundColors,
					hoverBackgroundColor: this.state.hoverBackgroundColors
					
				}]

    	}

    	this.setState({
    		chartData: nextChartData,
    		users: users
    	})
    }
  }

  render(){
  	return (
  		<div>
      	<h2>Household Members</h2>
      	<Doughnut data={this.state.chartData} options={this.state.chartOptions}/>
    	</div>
    )
  }
}

export default GeneralWheel;