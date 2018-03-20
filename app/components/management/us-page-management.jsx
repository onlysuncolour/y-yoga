import React from 'react';

class UsPageManagement extends React.Component{
  constructor() {
    super();
    this.state = {
      youngKeywords: [],
      yogaKeywords: [],
      youngPageAnimateKeywords: [],
      youngPhoto: "",
      yogaPhoto: "",
      headerPhoto: "",
    }
    this.getAllDatas = this.getAllDatas.bind(this)
  }
  componentWillMount() {
    this.getAllDatas()
  }
  getAllDatas() {
    
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="us-page-management">

      </div>
    )
  }
};

module.exports = {UsPageManagement}
