import React from 'react';

import {UsOne} from './us-one'
import {Yoga} from './yoga'
import {Young} from './young'

import  {default as styled} from 'styled-components'
import './us-main.less'

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
      <div className="us-main-page">
        <header className="header">
        </header>
        <div className="user-tab">
          <UsOne oneName="young"> </UsOne>
          <UsOne oneName="yoga"> </UsOne>
        </div>
        <div className="photo-tab">
          各种图片
        </div>
        <div className="blog-tab">
          各种Blog
        </div>
        <footer className="bottom">
          底部
          <br />
          快来联系我
        </footer>
      </div>
    )
  }
};

module.exports = {UsPage}
