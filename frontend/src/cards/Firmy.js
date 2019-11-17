import React from 'react';

class Firmy extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }

  async componentDidMount () {
    fetch(`http://185.8.164.46:3001/firmy/${this.props.query}`)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      try {
      this.setState({
        data: data.entities[0],
        loading: false
      });} catch (e) {
        console.log("tvoje mama");
      }
    });
  }

  render () {
    if (this.state.loading){
      return <p>loading</p>;
    } else if (!this.state.loading){
      return(
        <div>
          <table>
            <tr><td>Název</td><td>{this.state.data.data.premises[0].title}</td></tr>
            <tr><td>Adresa</td><td>{this.state.data.data.premises[0].address}</td></tr>
            <tr><td>Popis</td><td>{this.state.data.data.premises[0].description}</td></tr>
          </table>
        </div>
      );
    }
  }
}

export default Firmy;
