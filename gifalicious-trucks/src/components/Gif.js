import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
      <div id="gif" className="col-md-3">
        <a href={this.props.url} className="thumbnail">
          <img src={this.props.url} alt={this.props.name} />
        </a>
      </div>
    );
  }
}

export default Gif;
