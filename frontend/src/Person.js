import React from 'react';
import logo from './franta.jpg';
import logo2 from './jirian_plain.PNG';
import profilePic from './images/profilePic.jpg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail.css';


class Person extends React.Component {
  render(){
    return(
      <table
      id="person_table"
      >
        <tr>
          <td colspan="2">
          Jaromír Soukup
          </td>
        </tr>
        <tr>
          <td>
            město: Praha
          </td>
          <td>
            IČO: 666
          </td>
        </tr>
        <tr>
          <td>datum narození: </td>
          <td>adresa: </td>
        </tr>
        <tr>
          <td colspan="2">pohlaví:</td>
        </tr>
        <tr>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>ARES</td>
          <td>DPH</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
    )
  }
}

export default Person;
