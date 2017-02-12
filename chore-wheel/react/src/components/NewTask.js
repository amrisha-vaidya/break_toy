import React, { Component } from 'React';

class NewTask extends Component {
  constructor(props){
    super(props);
    this.state ={
    	value:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelSubmit = this.cancelSubmit.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  createTask(taskDetails){
    let that = this;
    // Need to add headers - compulsion.
    let headers = {
       'Content-Type':'application/json',
        'Access-Control-Origin': '*'
    }

    // set the task properties to be sent.
    let data = taskDetails;

    // send a POST request to create_task action.
    fetch(`/api/v1/tasks/create_task`, {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(data)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        that.props.user.tasks.push(data)
        that.props.turnShowAssignFormOff();
        that.props.updateAll();
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  cancelSubmit(event) {
    this.props.turnShowAssignFormOff();
  }

  handleSubmit(event) {
    let that = this; // to preserve scope.
    event.preventDefault();

    // Prepare data/properties for new task
    let newTaskDetails = {
      chores_id: this.state.value,
      users_id: this.props.user.id
    };

    // Open confirmation dialog w/ completion data.
    bootbox.prompt({
      title: "When should this be completed by?",
      inputType: 'date',
      callback: function (result) {
        // if user has actually entered data.
        if (result && result.length){
          newTaskDetails.finish_by = result;
          // call function to create a task and pass task properties to it.
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

    // On clickin choosing add task, fire handleSubmit action.
  	return (
  		<tr>
        <td>
        	 	<form>
			          <select value={this.state.value} onChange={this.handleChange} className="custom-select form-control">
			            { choreOptions }
			          </select>
			      </form>
        </td>
        <td className="text-right"><input type="submit" value="Assign" className="btn btn-primary" onClick={
          this.handleSubmit} /> <input type="submit" value="Cancel" className="btn btn-default" onClick={this.cancelSubmit} /> </td>
      </tr>
		)
  }
}

export default NewTask;
