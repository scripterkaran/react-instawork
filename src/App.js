import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import UserContainer from "./components/UserContainer";
import UserEdit from "./components/UserEdit";
import InstaAppBar from "./components/shared/AppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InstaAppBar/>
        <Switch>
          <Route exact path='/' component={UserContainer}/>
          <Route exact path='/users/:id' component={UserEdit}/>
        </Switch>
      </div>
    );
  }
}


export default App;
