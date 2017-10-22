import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
      <div id="gif" className="col-md-3">
        <a href="#" className="thumbnail">
          <img src={this.props.url} alt={this.props.alt} />
          <div className="caption">
            <p>{this.props.alt}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Gif;
