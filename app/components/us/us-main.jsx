import React from 'react';

import {Yoga} from './yoga'
import {Young} from './young'

class UsPage extends React.Component{
  constructor() {
    super();
    this.state = {
      clickCount1: 0,
      clickCount2: 0,
    }
    this.clickEvent1 = this.clickEvent1.bind(this);
    this.clickEvent2 = this.clickEvent2.bind(this);
  }
  componentDidMount() {
    utils.sayHello();
  }
  clickEvent1() {
    this.setState(prevState => ({
      clickCount1: ++prevState.clickCount1
    }))
  }
  clickEvent2() {
    this.setState(prevState => ({
      clickCount2: ++prevState.clickCount2
    }))
  }
  render() {
    return (
      <div>
        us-page
        <div>
          <button onClick={this.clickEvent1}> 点击1 </button>
          Click Count 1: {this.state.clickCount1}
        </div>
        <div>
          <button onClick={this.clickEvent2}> 点击2 </button>
          Click Count 2: {this.state.clickCount2}
        </div>
        <div>
          <Young> </Young>
        </div>
        <div>
          <Yoga> </Yoga>
        </div>
      </div>
    )
  }
};

module.exports = {UsPage}
