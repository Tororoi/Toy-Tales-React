import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false, toys: data
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (newToyObj) => {
    let newToy = {...newToyObj, likes: 0}
    let newToyArray = [...this.state.toys, newToy]

    this.setState({
      toys: newToyArray
    })
  }

  updateToy = (toyId, addLikes) => {
    let modArray = this.state.toys.map((toyObj) => {
      if (toyObj.id === toyId) {
        let copiedObject = {
          ...toyObj,
          likes: toyObj.likes + addLikes
        }
        return copiedObject
      } else {
        return toyObj
      }
    })
    this.setState({
      toys: modArray
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
      <ToyContainer toys={this.state.toys} updateToy={this.updateToy}/>
      </>
    );
  }

}

export default App;
