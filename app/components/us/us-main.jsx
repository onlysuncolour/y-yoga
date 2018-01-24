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
    let HeaderTab = styled.div`
      height: 80px;
      text-align: center;
    `
    let UserTab = styled.div`
    `
    let PhotoTab = styled.div`
      height: 80px;
      text-align: center;
      background-color: beige;
    `
    let BlogTab = styled.div`
      height: 80px;
      text-align: center;
      background-color: lightcyan;
    `
    let BottomTab = styled.div`
      height: 80px;
      text-align: center;
      background-color: lavender;
    `
    return (
      <div>
        <HeaderTab className="aa">
        </HeaderTab>
        <UserTab>
          <UsOne oneName="young"> </UsOne>
          <UsOne oneName="yoga"> </UsOne>
        </UserTab>
        <PhotoTab>
          各种图片
        </PhotoTab>
        <BlogTab>
          各种Blog
        </BlogTab>
        <BottomTab>
          底部
          <br />
          快来联系我
        </BottomTab>
      </div>
    )
  }
};

module.exports = {UsPage}
