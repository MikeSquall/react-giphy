import React, { Component } from 'react'
import DetailedGif from './DetailedGif'
import '../css/Gif.css';

class Gif extends Component {
  render() {
    const data = this.props.data
    const id = data.id
    const target = '#'.concat(id)
    const src = data.images.fixed_height.url
    const modal_src = data.images.original.url
    const title = data.title != undefined ? data.title : data.slug

    return (
      <div>
        <div className="col-md-4 gif" data-toggle="modal" data-target={target}>
          <div className="thumbnail">
            <img src={src} alt={title} />
            <div className="caption">
              <p>{title}</p>
            </div>
          </div>
        </div>
        <DetailedGif id={id} title={title} src={modal_src}/>
      </div>
    );
  }
}

export default Gif;
