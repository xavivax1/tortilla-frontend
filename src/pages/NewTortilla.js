import React, { Component } from 'react';
import CreateForm from '../components/CreateForm';
import tortillaService from '../services/tortillaService';

class NewTortilla extends Component {

  handleSubmit = (data) => {
    tortillaService.createTortilla(data)
      .then((result) => {
        console.log(result);
        this.props.history.push('/tortillas');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <CreateForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewTortilla;