import React from 'react';
import propTypes from 'prop-types'

export default class Dialog extends Component {
  static defaultProps = {
    title: '',
  }
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="y-dialog-wrapper">
        <div class="y-dialog-mask"></div>
        <div className="y-dialog-header">
          <span className="y-dialog-title"></span>
        </div>
        {this.props.children}
      </div>
    )
  }
}

Dialog.propTypes = {
  title: propTypes.string
}