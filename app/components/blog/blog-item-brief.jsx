import React from 'react';
import { Link } from "react-router-dom"

class ItemBrief extends React.Component{
  constructor() {
    super();
    this.goEdit = this.goEdit.bind(this)
  }
  componentDidMount() {

  }
  goEdit() {
    browserHistory.push({
      pathname: `/blog-edit/${this.props.item._id}`,
    })
  }
  render() {
    const EditLink = () => {
      if (this.props.me.userId && this.props.me.userId == this.props.item.author_id) {
        return (
          <span className="icon-edit edit" onClick={this.goEdit}></span>
        )
      }
    }
    return (
      <div className="blog-item-brief">
        <div className="top">
          <Link className="link title" to={'/blog-read/'+this.props.item._id}>{this.props.item.title}</Link>
          {EditLink()}
        </div>
        <div className="info">
          <span className="author">{this.props.item.author}</span>
          <span className="date">{Utils.formatDate(this.props.item.updated_at)}</span>
        </div>
        <div className="brief">
          {this.props.item.brief || this.props.item.content.substring(0, 100)}
        </div>
      </div>
    )
  }
};

module.exports = {ItemBrief}
