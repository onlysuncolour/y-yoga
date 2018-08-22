import React from 'react';
import PropTypes from 'prop-types';
import './input.less'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      v: props.value
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    let v = e.value;
    this.setState({v})
    this.props.onInput(v, this.props.name)
  }
  render() {
    return (
      <div className="y-input">
        <input value={this.state.v} onChange={this.handleInput} />
      </div>
    )
  }
}

Input.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

export default Input;