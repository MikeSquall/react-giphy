import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2 modal fade" id={this.props.id} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            </div>
            <div className="modal-body">
              <img src={this.props.src} alt={this.props.title} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
