import React from 'react';
import {Button} from 'UI'

class BlogReadRemark extends React.Component{
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
      <div className="blog-read-remark">
        <hr/>
        <div className="add-remark">
          <textarea name="" className="remark"></textarea>
          <Button>发表</Button>
        </div>
        <div className="remark-list">
          {
            this.state.remarkList.map(r => {
              
            })
          }
        </div>
      </div>
    )
  }
};

module.exports = {BlogReadRemark}
