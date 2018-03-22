import React from 'react';

class OneMainPageManagement extends React.Component{
  constructor() {
    super();
    this.state = {
      keywords: [],
      photo: ""
    }
  }
  componentWillMount() {
    // TODO: 获取两个人的keywords
    // TODO: 获取首页两人的photo

  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="one-main-page-management">
        {this.props.user}
        <div className="photo-manage">
          photo
        </div>
        <div className="keyword-manage">
          keyword
        </div>
      </div>
    )
  }
};

module.exports = {OneMainPageManagement}
