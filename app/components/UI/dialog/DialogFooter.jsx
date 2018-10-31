import React from 'react';

export default class DialogFooter extends Component {
  render() {
    return (
      <div style={this.style()} className="y-dialog-footer">
        { this.props.children }
      </div>
    )
  }
}