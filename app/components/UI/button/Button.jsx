import styled from 'styled-components';
import React from 'react';

class Button extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: props.text || 'placeholder'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: 'clicked'
    });
  }
  render() {
    return (
      <button className="y-btn" type="button" onClick={this.handleChange}>{this.state.text}</button>
    )
  }
}

export default Button