import React, { Component } from 'react';
import UpdateForm from '../components/UpdateForm';
import tortillaService from '../services/tortillaService';

class EditTortilla extends Component {
  
  handleUpdate = (tortilla) => {
   tortillaService.editTortilla(this.props.match.params.id,tortilla)
   .then (results => {
      console.log(results);
      this.props.history.push('/tortillas')
   }   
    )   
   .catch ( err => {
     console.log(err);
   })

  }
  render() {
    return (
      <div>
        <h1>EditTortilla</h1>
        <UpdateForm 
          id={this.props.match.params.id}
          onSubmit={this.handleUpdate}
        />
      </div>
  
    );
  }
}

export default EditTortilla;
/*
<TortillaCard
key={tortilla._id}
data={tortilla}
onDelete={this.handleDelete}
/>
*/
