import React, { Component } from  'React';

class NewChoreForm extends React.Component {
  constructor(props){
    this.state= {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('A title was added:' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type='text' value={this.state.value}
          onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input type='text' value={this.state.value}
          onChange={this.handleChange} />
        </label>
        <input type='submit' value='Add Chore' />
      </form>
    )
  }
}

export default NewChoreForm;
