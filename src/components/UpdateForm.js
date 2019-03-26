import React, { Component } from 'react';
import tortillaService from '../services/tortillaService';

class UpdateForm extends Component {
  state = {
    name: '',
    special: '',
    size: '',
    imageUrl: ''
  }
  componentDidMount() {
    const {id} = this.props;
  
       tortillaService.getThis(id)
       .then(result => {
         console.log(result);
         const {name, special, size, imageUrl} = result;
         this.setState({
          name,
          special,
          size,
          imageUrl
         })
       })
       .catch((error)=>{
         console.log(error);
       })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();       //event prevent default
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      special: '',
      size: '',
      imageUrl: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} onChange={this.handleChange} name="name" type="text"/>
        <input value={this.state.special} onChange={this.handleChange} name="special" type="text"/>
        <input value={this.state.size} onChange={this.handleChange} name="size" type="text"/>
        <input value={this.state.imageUrl} onChange={this.handleChange} name="imageUrl" type="text"/>
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default UpdateForm;