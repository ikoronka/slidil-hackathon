import React from 'react';
import SearchList from './SearchList.js';
import Search from './Search.js';
import List from './List.js';
import Firmy from './cards/Firmy.js';
import ARES from './cards/ARES.js';
import Person from './Person.js';
import logo from './jirian.PNG';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(

    <Router>
    <div className="App">
      <header className="App-header">
      <Route exact path="/" component={Search} />
      <Route exact path="/search/:query" component={SearchList} />
      <Route exact path="/firmy" component={Firmy} />
      </header>
    </div>
    </Router>
  );
    }
}

export default App;
