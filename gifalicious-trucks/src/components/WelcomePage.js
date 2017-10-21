import React, { Component } from 'react';
import '../css/WelcomePage.css';
import Navbar from './Navbar'
import Title from './Title'

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Latest awsome trucks gifs',
    }
  }

  render() {
    return (
      <div id="welcomePage">
        <Navbar />
        <Title title={this.state.title} />
      </div>
    );
  }
}

export default WelcomePage;
