import React, { Component } from 'react';
//import '../css/GifList.css';
import Gif from './Gif'

class GifList extends Component {
  render() {
    return (
      <div id="gifList" className="col-md-8 col-md-offset-2">
        <Gif url="https://media3.giphy.com/media/3ohhwJ0fITDG7upkqI/giphy.gif" alt="test" />
      </div>
    );
  }
}

export default GifList;
/*
{this.props.gifList.data.map(d => {
          return <Gif url={d.embed_url} alt={d.title} key={d.index}/>
        })}
*/