import React, { Component } from 'react';
import NewChoreForm from './NewChoreForm';

class Lowercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	showForm: false,
      title: '',
      description: ''
    };

    this.turnShowFormOn = this.turnShowFormOn.bind(this);
    this.turnShowFormOff = this.turnShowFormOff.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createChore = this.createChore.bind(this);
  }

  turnShowFormOn(event){
  	let that = this;
  	that.setState({showForm: true});
  }

  turnShowFormOff(event){
  	let that = this;
  	that.setState({showForm: false});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    let that = this;
    event.preventDefault();
    let newChoreDetails = {
      title: this.state.title,
      description: this.state.description
    }
    $("#add_chore_modal").modal('hide');
    that.createChore(newChoreDetails);
  }

  createChore(choreDetails){
    let that = this;
    let headers = {
       'Content-Type':'application/json',
        'Access-Control-Origin': '*'
    }
    let data = choreDetails;
    fetch(`/api/v1/chores/create_chore`, {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(data)
    })
    .then(function(response){ 
        return response.json(); 
    })
    .then(function(data){ 
        that.props.updateAll();

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return(
        <div>
        <div className="center">
          <button data-toggle="modal" data-target="#add_chore_modal" className="btn btn-primary btn-lg outline center-block"><i className="fa fa-plus"></i>&nbsp;Add a chore</button>
        </div>


        <div className="modal fade" id="add_chore_modal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              <h3 className="modal-title" id="lineModalLabel">Add a chore</h3>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="add_chore_title">Title</label>
                  <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="form-control" id="add_chore_title" placeholder="Enter title" />
                </div>
                <div className="form-group">
                  <label htmlFor="add_chore_description">Enter a short description</label>
                  <textarea className="form-control" value={this.state.description} onChange={this.handleDescriptionChange} id="add_chore_description" placeholder="Description" />
                </div>
                {/*<button type="submit" className="btn btn-default">Submit</button>*/}
              </form>

            </div>
            <div className="modal-footer">
              <div className="btn-group btn-group-justified" role="group" aria-label="group button">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default" data-dismiss="modal"  role="button">Close</button>
                </div>
                <div className="btn-group" role="group">
                  <button type="button" id="saveImage" onClick={this.handleSubmit} className="btn btn-default btn-hover-green" data-action="save" role="button">Save</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
    )
  }
};

export default Lowercomponent;
