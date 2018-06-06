import React from 'react';

class BlogReadComment extends React.Component{
  constructor() {
    super();
    this.state = {
      remarkList: []
    }
    this.getDatas = this.getDatas.bind(this)
  }
  componentDidMount() {
    // this.getDatas()
  }
  getDatas() {
    Request.Blog.getBlogRemark(this.props.blogId).then(resp => {
      if (resp.ok) {
        this.setState({
          remarkList: resp.data
        })
      }
    })
  }
  addRemark() {

  }
  render() {
    return (
      <div className="blog-read-comment">
        <hr/>
        
      </div>
    )
  }
};

module.exports = {BlogReadComment}
