import React from 'react';

import './blog-edit.less'
import { removePopup } from 'actions';

class BlogBriefEdit extends React.Component{
  constructor() {
    super();
    this.state = {
      brief: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.save = this.save.bind(this)
  }
  componentDidMount() {
    this.setState({
      brief: this.props.data.brief
    })
  }
  handleInput(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  save() {
    this.props.events.setBrief(this.state.brief)
    store.dispatch(removePopup())
  }
  cancel() {
    store.dispatch(removePopup())
  }
  render() {
    return (
      <div className="blog-brief-edit">
        <div className="header">
          <span>博文概述</span>
        </div>
        <div className="content">
          <textarea value={this.state.brief} name="brief" onChange={this.handleInput} ></textarea>
        </div>
        <div className="footer">
          <button onClick={this.save}> 保存 </button>
          <button onClick={this.cancel}> 取消 </button>
        </div>
      </div>
    )
  }
};

module.exports = {BlogBriefEdit}
