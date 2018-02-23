import React from 'react';

class Popup extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="popup">
        <div className="popup-mask"></div>
        <div className="popup-body">
          <div className="popup-container">
            asdfasd
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {Popup}
