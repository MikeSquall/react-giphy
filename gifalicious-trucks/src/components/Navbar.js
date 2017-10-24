import React, { Component } from 'react';
import Loading from './Loading'
// import '../css/Navbar.css';

class RefreshButton extends Component {
  handleClick() {
    if (!this.props.action) return <div class="alert alert-info" role="alert">Reloading</div>
    console.log('click handled !!')
    return this.props.action
  }

  render() {
    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" onClick={this.handleClick.bind(this)}>Refresh <span className="sr-only">(current)</span></a></li>
        </ul>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Gifalicious Trucks</a>
            </div>

            <RefreshButton action={this.props.refresh}/>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
