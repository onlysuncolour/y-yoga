import React from 'react';

import {UsOne} from './us-one'
import {Yoga} from './yoga'
import {Young} from './young'

import  {default as styled} from 'styled-components'

let Button = styled.button`
  margin: 20px
`

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
        <Button>hello</Button>
        <div>
          <UsOne oneName="young"> </UsOne>
          <UsOne oneName="yoga"> </UsOne>
        </div>
      </div>
    )
  }
};

module.exports = {UsPage}
