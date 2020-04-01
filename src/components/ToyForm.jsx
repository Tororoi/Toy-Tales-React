import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleAllInputs = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    // console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
          type="text" 
          name="name" 
          autoComplete="off" 
          value={this.state.name} 
          placeholder="Enter a toy's name..." 
          className="input-text" 
          onChange={this.handleAllInputs}/>
          <br/>
          <input 
          type="text" 
          name="image" 
          autoComplete="off" 
          value={this.state.image} 
          placeholder="Enter a toy's image URL..." 
          className="input-text" 
          onChange={this.handleAllInputs}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
