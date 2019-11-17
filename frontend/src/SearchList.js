import React from 'react';
import Search from './Search.js';
import List from './List.js';
import logo from './jirian_plain.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

class SearchList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Search query={this.props.match.params["query"]} />
      <List query={this.props.match.params["query"]} />
      </div>
    )
  }
}
export default SearchList;
