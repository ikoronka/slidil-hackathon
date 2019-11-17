import React from 'react';
import SearchResult from './SearchResult.js';
import List from './List.js';
import logo from './images/sLidil.jpg';
import logo2 from './jirian_plain.PNG';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Search.css';
import './List.css';

// search bar, input for search term
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
     window.location.href = "/search/" + this.props.searchTerm;
  }

  handleSearchTermChange(event) {
    this.props.onSearchTermChange(event.target.value);
  }

  imageClick = () => {
    console.log('tvůj táta');
  }

  handleSearchTermSubmit(event) {
    event.preventDefault();
    this.props.onSearchTermSubmit();
  }

  render() {
    return (
      <Router>
<div className="SearchBar">
  <form onSubmit={this.handleSearchTermSubmit}>
      <img src={logo} className="App-logo" alt="logo" onClick={this.imageClick}/>
      <br/>
      <label>
      Hledaná osoba:
      <br/>
      <input type="text" name="name" autocomplete="off" className="form-control" placeholder="např. Karel Novák" onChange={this.handleSearchTermChange}/>
      </label>
<Link to={"/search/" + this.props.searchTerm}>
<button className="btn btn-primary" onClick={this.handleClick}>
Hledej!
</button>
</Link>
  </form>
</div>
      </Router>
    );
  }
}

// wraps it all up in a neat lil package
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null,
      searchTerm: '',
      search: false
    };
    this.handleSearchTermSubmit = this.handleSearchTermSubmit.bind(this);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  async componentDidMount() {
    const url = "http://185.8.164.46:3001/ares/search/" + this.state.searchTerm;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data[0], loading: false });
  }
  handleSearchTermChange(searchTerm) {
    this.setState({searchTerm, search: false});
  }

  handleSearchTermSubmit() {
    this.setState({search: true});
  }

  render() {
    if (this.state.isLoading){
      return <p>loudink</p>;
    }
    if (!this.state.isLoading){
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          onSearchTermChange={this.handleSearchTermChange}
          onSearchTermSubmit={this.handleSearchTermSubmit} />
        <SearchResult searchTerm={this.props.query} search={this.state.search} />

      </div>
    );
  }
  }
}
export default Search;
