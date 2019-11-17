import React from 'react';

class ARES extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      ares: null,
      or: null,
      rzp: null,
      res: null,
      cns: null,
      ceu: null,
      rzz: null,
      szr: null,
      psh: null,
      school: null
    };
  }

  async componentDidMount () {
    fetch("http://185.8.164.46:3001/ares/ares/76574200")
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        ares: data
      });
      console.log(data);
    });
    fetch("http://185.8.164.46:3001/ares/or/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        or: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/rzp/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        rzp: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/res/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        res: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/cns/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        cns: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/cen/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        cen: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/rzz/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        rzz: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/szr/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        szr: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/psh/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        psh: data.entities[0]
      });
    });
    fetch("http://185.8.164.46:3001/ares/school/" + this.props.ico)
    .then((rawData) => {return rawData.json();})
    .then((data) => {
      this.setState({
        school: data.entities[0]
      });
    });
  }

  render () {
    return(
      <div></div>
    );
  }
}

export default ARES;
