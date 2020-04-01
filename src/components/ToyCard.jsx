import React, { Component } from 'react';

class ToyCard extends Component {

  handleLikes = (e) => {
    this.props.updateToy(this.props.toy.id, 1)
  }

  render() {
    let {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
