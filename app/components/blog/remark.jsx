import React from 'react';
import {Button} from 'UI'
class BlogReadRemark extends React.Component{
  constructor(props) {
    super();
    this.state = {
      remark: props.remark,
      myReply: "",
      showReply: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  render() {
    return (
      <div className="remark">

      </div>
    )
  }
}