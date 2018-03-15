import React from 'react';
import { Link } from "react-router-dom"

class UsOne extends React.Component{
  constructor() {
    super();
    this.state = {
      contents: []
    }
    this.getInfo = this.getInfo.bind(this)
  }
  componentDidMount() {
    console.log(this.props.oneName);
    this.getInfo()
  }
  getInfo() {
    Request.Keywords.getUsInfo(this.props.oneName).then(resp => {
      if (resp.ok) {
        this.setState({
          contents: resp.data.words
        })
      }
    })
  }
  render() {
    return (
      <div className="us-one-page">
        <div className="page-content">
          <div className={ "photo mb20"+" "+ this.props.oneName+"Photo" }>
          </div>
          <div className="name">
            <Link className="link" to={'/'+this.props.oneName}>{Dict.USER[this.props.oneName]}</Link>
          </div>
          <ul className="content-list">
            {
              this.state.contents.map(i => (
                <li className="content-item" key={i}>{ i }</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
};

module.exports = {UsOne}
