import React, { Component } from 'react';
import data from '../config'
import Navbar from './Navbar'
import Title from './Title'
import GifList from './GifList'

const api_key = data.api_key

const urlForLatestGifs = latestGifs =>
  'http://api.giphy.com/v1/gifs/search?q=truck&api_key=' + api_key + '&limit=24&sort=recent'

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Latest awsome trucks gifs',
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForLatestGifs())
        .then(response => {
          if (!response.ok) {
            throw Error("Network request failed")
          }
          return response
        })
        .then(d => d.json())
        .then(d => {
          this.setState({
              gifList: d
          })
        }, () => {
          this.setState({
              requestFailed: true
          })
        })
  }

  render() {
    if (this.state.requestFailed) return <p>Something went wrong ! Please reload or try again later</p>
    return (
      <div id="welcomePage">
        <Navbar />
        <Title title={this.state.title} />
        <GifList gifList={this.state.gifList} />
      </div>
    );
  }
}

export default WelcomePage;
