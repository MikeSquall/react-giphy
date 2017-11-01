import React, { Component } from 'react';
import { api_key } from '../config.js'
import Navbar from './Navbar'
import Title from './Title'
import GifList from './GifList'

const key = api_key() ;

const urlForLatestGifs = latestGifs =>
  `http://api.giphy.com/v1/gifs/search?q=truck&api_key=${key}&limit=24&sort=recent` ;

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Latest awsome trucks gifs',
      requestFailed: false
    }
  }

  fetchUrl() {
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

  componentDidMount() {
    this.fetchUrl()
  }

  render() {
    if (this.state.requestFailed) return <p>Something went wrong ! Please reload or try again later</p>
    return (
      <div id="welcomePage">
        <Navbar refresh={this.fetchUrl()}/>
        <Title title={this.state.title} />
        <GifList gifList={this.state.gifList} />
      </div>
    );
  }
}

export default WelcomePage;
