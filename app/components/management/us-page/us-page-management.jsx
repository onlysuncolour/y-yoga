import React from 'react';
import {OneMainPageManagement} from './one-main-page-management.jsx'
import {YoungAnimateKeywordsManagement} from './young-animate-keywords-management.jsx'
class UsPageManagement extends React.Component{
  constructor() {
    super();
    this.state = {
      headerPhoto: "",
    }
    this.getHeaderPhoto = this.getHeaderPhoto.bind(this)
  }
  componentWillMount() {
    this.getHeaderPhoto()
  }
  getHeaderPhoto() {
    // TODO: 获取首页顶部photo
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="us-page-management">
        <div className="header-photo-management">
          header-photo
        </div>
        <div className="us-main-page-management">
          <OneMainPageManagement user="young"></OneMainPageManagement>
          <OneMainPageManagement user="yoga"></OneMainPageManagement>
        </div>
        <div className="young-page">
          <div className="young-title">
            Young
          </div>
          <YoungAnimateKeywordsManagement></YoungAnimateKeywordsManagement>
        </div>

      </div>
    )
  }
};

module.exports = {UsPageManagement}
