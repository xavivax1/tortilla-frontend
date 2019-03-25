import React, { Component } from 'react';

class TortillaCard extends Component {
  render() {
    const {data: {_id, name, special, size, imageUrl}, onDelete} = this.props;
    return (
        <li>
          <h2>{name}</h2>
          <button onClick={() => onDelete(_id)}>Delete</button>
        </li>
    );
  }
}

export default TortillaCard;