import React from 'react';

import {UsOne} from './us-one'
import {Yoga} from './yoga'
import {Young} from './young'

class UsPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
    Utils.sayHello();
  }
  nowTime() {
    return Date()
  }
  render() {
    return (
      <div>
        us-page
        <div>
          <UsOne oneName="young"> </UsOne>
          <UsOne oneName="yoga"> </UsOne>
        </div>
      </div>
    )
  }
};

module.exports = {UsPage}
