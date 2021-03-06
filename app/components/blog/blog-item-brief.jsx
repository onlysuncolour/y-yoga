import React from 'react';
import { Link } from "react-router-dom"
import {Button} from 'UI';

class ItemBrief extends React.Component{
  constructor() {
    super();
    this.goEdit = this.goEdit.bind(this)
  }
  componentDidMount() {

  }
  goEdit() {
    browserHistory.push({
      pathname: `/blog-edit`,
      search: searchformat.stringify({id: this.props.item._id})
    })
  }
  render() {
    const EditLink = () => {
      if (this.props.me._id && this.props.me._id == this.props.item.author._id) {
        return (
          <span className="icon-edit edit" onClick={this.goEdit}></span>
        )
      }
    }
    return (
      <div className="blog-item-brief">
        <div className="top">
          <Link className="link title" to={{
            pathname: '/blog-read',
            search: searchformat.stringify({id: this.props.item._id})
          }}>{this.props.item.title}</Link>
          {EditLink()}
        </div>
        <div className="info">
          <span className="author">{this.props.item.author.name}</span>
          <span className="date">{Utils.formatDate(this.props.item.updatedAt)}</span>
          <Button>click me</Button>
        </div>
        <div className="brief">
          {this.props.item.brief}
        </div>
      </div>
    )
  }
};

module.exports = {ItemBrief}
