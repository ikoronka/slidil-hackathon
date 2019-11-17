import React from 'react';
import logo from './jirian.PNG';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// displays search term
class SearchResult extends React.Component {
  render() {
    return(
      <p className="person">Výsledky pro: {this.props.searchTerm}</p>
    );
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.search;
  }
}

export default SearchResult;
