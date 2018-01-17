import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router'
import {Header} from './app/header'

class Main extends React.Component{
  constructor() {
    super();
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <Header> </Header>
        {this.props.children}
      </div>
    )
  }
}

module.exports = {Main}
