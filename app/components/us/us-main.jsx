import React from 'react';

import {Yoga} from './yoga'
import {Young} from './young'

class UsPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
    utils.sayHello();
  }
  render() {
    return (
      <div>
        us-page
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
