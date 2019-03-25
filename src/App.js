import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import ListTortillas from './pages/ListTortillas';
import NewTortilla from './pages/NewTortilla';
import EditTortilla from './pages/EditTortilla';
import DetailTortilla from './pages/DetailTortilla';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tortillas" component={ListTortillas} />
          <Route path="/tortillas/new" component={NewTortilla} />
          <Route path="/tortillas/:id/edit" component={EditTortilla} />
          <Route path="/tortillas/:id" component={DetailTortilla} />
        </Switch>
      </Router>
    );
  }
}

export default App;
