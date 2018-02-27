import React from 'react';
import { Link } from "react-router-dom"

class ItemBrief extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="blog-item-brief">
        blog-item-brief
        <div className="top">
          <Link className="link" to={'/blog-read/'+this.props.item._id}>title: {this.props.item.title}</Link>
          <Link className="link" to={'/blog-edit/'+this.props.item._id}>编辑</Link>
        </div>
        <div className="brief">
          content: {this.props.item.content}
        </div>
      </div>
    )
  }
};

module.exports = {ItemBrief}
