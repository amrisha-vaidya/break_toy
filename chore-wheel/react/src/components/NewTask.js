import React, { Component } from 'React';

class NewTask extends Component {
  constructor(props){
    super(props);
    this.state ={
    	value:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask(taskDetails){
    let that = this;
    let headers = {
       'Content-Type':'application/json',
        'Access-Control-Origin': '*'
    }
    let data = taskDetails;
    fetch(`/api/v1/tasks/create_task`, {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(data)
    })
    .then(function(response){ 
        return response.json(); 
    })
    .then(function(data){ 
        console.log(data);
        that.props.turnShowAssignFormOff();
        that.props.getTasksData(that.props.user);
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let that = this;
    let newTaskDetails = {
      chores_id: this.state.value,
      users_id: this.props.user.id
    }

    event.preventDefault();
    bootbox.prompt({
      title: "When should this be completed by?",
      inputType: 'date',
      callback: function (result) {
        if (result && result.length){
          newTaskDetails.finish_by = result;
          that.createTask(newTaskDetails);
        }
      }
    });
  }

  render(){

  	let choreOptions;
		if (this.props.chores){
			choreOptions = this.props.chores.map((chore, i) =>
      <option key={i+1} value={chore.id}> {chore.title} </option>
      );
      choreOptions.unshift([<option key='0' value='' disabled='disabled'> Select a chore to assign </option>]);
		}

  	return (
  		<tr>
        <td>
        	 	<form>
			          <select value={this.state.value} onChange={this.handleChange} className="custom-select form-control">
			            { choreOptions }
			          </select>
			      </form>
        </td>
        <td><input type="submit" value="Assign" className="btn btn-primary" onClick={this.handleSubmit} /> </td>
      </tr>
		)
  }
}

export default NewTask;
