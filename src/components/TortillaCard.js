import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TortillaCard extends Component {
  render() {
    const {data: {_id , name}, onDelete} = this.props;
    return (
        <li>
          <h2>{name}</h2>
          <button onClick={() => onDelete(_id)}>Delete</button>
          <Link to={`/tortillas/${_id}/edit`}>Edit</Link>
        </li>
    );
  }
}

export default TortillaCard;