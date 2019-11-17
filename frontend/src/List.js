import React from 'react';
import Firmy from "./cards/Firmy.js"
import logo from './jirian_plain.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
      loading: true,
      adata: null,

    }
  }

  async componentDidMount() {
    fetch(`http://185.8.164.46:3001/ares/search/${this.props.query}/`)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        data: data,
        loading: false
      });
    });
  }

  render(){
    console.log("TO SI ZE NE DELAS PICU");
    let tvojemama = [];
    if (!this.state.loading) {
      for (var key in this.state.data["dtt:V"][0]["dtt:S"]) {
        if (this.state.data["dtt:V"][0]["dtt:S"].hasOwnProperty(key)) {
          tvojemama.push(this.state.data["dtt:V"][0]["dtt:S"][key]);
        }
      }
    }
    console.log(tvojemama);

    return (
      <div className="container">
      <Firmy query={this.props.query} />
      <div className="row">
        <div className="col-12">
        <table className="table table-image">
          <thead>
            <tr>
              <th scope="col">Subjekt</th>
              <th scope="col">IČO</th>
              <th scope="col">Adresa</th>
              <th scope="col">Dostupná data</th>
              <th scope="col">Data ARES</th>
              <th scope="col">Data Detail</th>
              <th scope="col">Data Firmy.cz</th>
              <th scope="col">Data OR</th>
              <th scope="col">Data RZP</th>
              <th scope="col">Data - další</th>
            </tr>
          </thead>
          <tbody>
            {tvojemama.map((element) => {
              return <tr>
                <td>{element["dtt:ojm"]}</td>
                <td>{element["dtt:ico"]}</td>
                <td>{element["dtt:jmn"]}</td>
                <td>{element["dtt:pf"]}</td>
                <td><a href={"http://185.8.164.46:3001/ares/ares/" + element["dtt:ico"]} target="_blank">Odkaz</a></td>
                <td><a href={"http://185.8.164.46:3001/detail/" + element["dtt:ico"]} target="_blank">Odkaz</a></td>
                <td><a href={"http://185.8.164.46:3001/firmy/" + element["dtt:ico"]} target="_blank">Odkaz</a></td>
                <td><a href={"http://185.8.164.46:3001/ares/or/" + element["dtt:ico"]} target="_blank">Odkaz</a></td>
                <td><a href={"http://185.8.164.46:3001/ares/rzp/" + element["dtt:ico"]} target="_blank">Odkaz</a></td>
                <td><a href={"http://185.8.164.46:3001/detail/" + element["dtt:ico"]} target="_blank">Odkaz</a></td>
              </tr>;
            })}
          </tbody>
        </table>

        </div>
      </div>
      </div>
    )
  }
}
export default List;
