import React from 'react';
import { connect } from 'react-redux';
import { removePopup } from 'actions';

class Popup extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  removePopup() {
    store.dispatch(removePopup());
  }
  stopPropagation(e) {
    e.stopPropagation()
  }
  render() {
    return (
      <div className="popup">
        {
          this.props.popup.popups.map(i => {
            return (
              <div key={i.key}>
                <div className="popup-mask"></div>
                <div onClick={this.removePopup} className="popup-body">
                  <div onClick={this.stopPropagation} className="popup-container">
                    {i.render()}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    popup: store.popup
  }
}

module.exports = {Popup: connect(mapStateToProps)(Popup)}
