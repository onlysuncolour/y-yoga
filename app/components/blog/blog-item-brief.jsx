import React from 'react';
import { Link } from "react-router-dom"

const formatDate = (i) => {
  if (!i) {
    return null
  } else if (!isNaN(i)) {
    return Manba(+i).format('YYYY-MM-DD')
  } else {
    return Manba(i).format('YYYY-MM-DD')
  }
}

class ItemBrief extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="blog-item-brief">
        <div className="top">
          <Link className="link title" to={'/blog-read/'+this.props.item._id}>title: {this.props.item.title}</Link>
          <Link className="link edit" to={'/blog-edit/'+this.props.item._id}>编辑</Link>
        </div>
        <div className="info">
          <span className="author">{this.props.item.author}</span>
          <span className="date">{formatDate(this.props.item.updated_at)}</span>
        </div>
        <div className="brief">
          {this.props.item.brief || this.props.item.content.substring(0, 100)}
        </div>
      </div>
    )
  }
};

module.exports = {ItemBrief}
