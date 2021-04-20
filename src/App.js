import React, {Component} from "react";
import { Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" ; 
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Waiting from './components/Waiting';
import Default from './components/Default';
  
function App() {
  return (
   <>
  <Navbar />
  <Switch>
    <Route exact path="/" component={UserList}/>
    <Route path="/waiting" component={Waiting}/>
    <Route  component={Default}/> 
    </Switch>
   </>
  );
}

export default App;
