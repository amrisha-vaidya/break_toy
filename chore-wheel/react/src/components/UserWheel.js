import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class UserWheel extends Component {
  constructor(props) {
    super(props)
    let backgroundColors = ['#21E08A'];
    let hoverBackgroundColors= ['#21E08A'];

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
  		backgroundColors: ['#21E08A'],
  		hoverBackgroundColors: ['#21E08A'],

    	chartData: {},

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
    this.initializeChart = this.initializeChart.bind(this);
  }

  componentWillMount(){
  	if (this.props.user){
  		this.initializeChart(this.props.user);
  	}
  }

  clickHandler(event, legendItem){
  	// this.props.setFeedUser(this.state.users[legendItem.index]);

  }

  initializeChart(user){
  	let tasks = user.tasks;
  	let totalTasks = tasks.length;
  	let completeTasks = [];
  	let incompleteTasks =[];

  	tasks.forEach(function(task){
  		if (task.completed){
  			completeTasks.push(task);
  		} else {
  			incompleteTasks.push(task);
  		}
  	});

  	let completeDegrees = (completeTasks.length/tasks.length) * 360;
  	let incompleteDegrees = (incompleteTasks.length/tasks.length) * 360;
    let degrees = [completeDegrees, incompleteDegrees]

  	let nextChartData= {
  		labels: ["Complete", "Not Completed Yet"],
  		datasets: [{
				data: degrees,
				backgroundColor: this.state.backgroundColors,
				hoverBackgroundColor: this.state.hoverBackgroundColors
			}]
  	}

  	this.setState({
  		chartData: nextChartData,
  	})
  }

  componentWillReceiveProps(nextProps) {
    if(JSON.stringify(nextProps) != JSON.stringify(this.props)){
    	this.initializeChart(nextProps.user);
    }
  }

  render(){

  	let heading;
  	let toShow;
  	if (this.props.user.tasks.length == 0){
  		heading = <h3> {this.props.user.first_name} has no chores assigned! </h3>
  	} else {
  		heading = <h3> {this.props.user.first_name}'s chores </h3>
  		toShow = <Doughnut data={this.state.chartData} options={this.state.chartOptions}/>
  	}

  	return (
  		<div>
  			{ heading }
      	{ toShow }
    	</div>
    )
  }
}

export default UserWheel;