import React, { Component } from 'react';
import '../css/Title.css';

class Title extends Component {
  render() {
    return (
      <div className="row">
        <div id="title" className="col-md-8 col-md-offset-2">
          <hr className="col-md-12"/>
          <img src="../img/optimus.gif" alt="opt" className="col-md-2"/>
          <h1 className="col-md-8">{this.props.title}</h1>
          <img src="../img/optimus.gif" alt="opt" className="col-md-2"/>
          <hr className="col-md-12"/>
        </div>
      </div>
    );
  }
}

export default Title;
