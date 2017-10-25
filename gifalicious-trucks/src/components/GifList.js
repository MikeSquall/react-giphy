import React, { Component } from 'react';
import '../css/GifList.css';
import Gif from './Gif'
import Loading from './Loading'

class GifList extends Component {
  render() {
    if (!this.props.gifList) return <Loading />
    return (
      <div className="row equal-height-columns">
        <div id="gifList" className="col-md-8 col-md-offset-2">
          {this.props.gifList.data.map((d) => {
            return <Gif data={d} key={d.id}/>
          })}
        </div>
      </div>
    );
  }
}

export default GifList;
