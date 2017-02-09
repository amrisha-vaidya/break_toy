import React, { Component } from 'React';

class NewTask extends Component {
  constructor(props){
    super(props);
    this.state ={
    	value:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.value();
  }



  render(){

  	let choreOptions;
		if (this.props.chores){
			choreOptions = this.props.chores.map((chore, i) =>
      <option key={i} value={chore.id}> {chore.title} </option>
      );
		}

  	return (
  		<tr>
        <td className='text-muted'>
        	 	<form onSubmit={this.handleSubmit}>
			        <label>
			          Select chore to assign:
			          <select value={this.state.value} onChange={this.handleChange}>
			            { choreOptions }
			          </select>
			        </label>
			      </form>
        </td>
        <td>   <input type="submit" value="Assign" /> </td>
      </tr>
		)
  }
}

export default NewTask;
