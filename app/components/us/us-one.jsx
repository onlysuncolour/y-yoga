import React from 'react';
import { Link } from "react-router-dom"

class UsOne extends React.Component{
  constructor() {
    super();
    this.state = {
      contents: ["聪明", "好看", "精通Vue，React，NodeJs等", "自学NodeJs"]
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="us-one-page">
        <div className="page-content">
          <div className="photo">
            PHOTO
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
