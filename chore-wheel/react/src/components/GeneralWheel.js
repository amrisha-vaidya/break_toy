import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class GeneralWheel extends Component {
  constructor(props) {
    super(props)
    let backgroundColors = ['#FF6384','#36A2EB','#FFCE56','#D35400', '#9B59B6', '#C70039', '#E51400', '#647687', '#6A00FF'];
    let hoverBackgroundColors= ['#FF6384','#36A2EB','#FFCE56', '#D35400', '#9B59B6','#C70039', '#E51400','#647687','#6A00FF'];

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      backgroundColors: ['#FF6384','#36A2EB','#FFCE56','#D35400', '#9B59B6', '#C70039', '#E51400', '#647687','#6A00FF'],
      hoverBackgroundColors: ['#FF6384','#36A2EB','#FFCE56','#D35400', '#9B59B6', '#C70039', '#E51400', '#647687','#6A00FF'],

    	chartData: {
			},

			chartOptions:{
				legend:{
					onClick: this.clickHandler
				},
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[tooltipItem.index];
              var precentage = Math.floor(((currentValue/total) * 100)+0.5);
              return precentage + "%";
            }
          }
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
