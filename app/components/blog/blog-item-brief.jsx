import React from 'react';

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
          title: {this.props.item.title}
        </div>
        <div className="brief">
          content: {this.props.item.content}
        </div>
      </div>
    )
  }
};

module.exports = {ItemBrief}
