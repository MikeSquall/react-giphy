import React, { Component } from 'react'
import DetailedGif from './DetailedGif'

class Gif extends Component {
  render() {
    return (
      <div>
        <div id="gif" className="col-md-3" data-toggle="modal" data-target="#detailedGif">
          <div className="thumbnail">
            <img src={this.props.url} alt={this.props.title} />
          </div>
        </div>
        <DetailedGif id="detailedGif" title={this.props.title} src={this.props.url}/>
      </div>
    );
  }
}

export default Gif;
