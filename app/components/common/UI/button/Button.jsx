import styled from 'styled-components';
import React from 'react';

class Button extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: props.initialValue || 'placeholder'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div>
        type something:
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
      </div>
    )
  }
}

export default Button