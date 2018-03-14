import React from 'react';
require('./todo-animate.less')

class TodoAnimate extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  componentDidUpdate() {
    let speed = 200;
    let width = this.refs.content.clientWidth
    // this.refs.content.width = width
    width = width / 2
    var onceTime = width / speed * 1000; //ms
    this.refs.content.style.animationDuration = onceTime + "ms"
  }
  render() {
    return (
      <div className="todo-animate-tab">
        <div className="line-one">
          <span className="content" ref="content">
            <span>Javascript</span>
            <span>nodeJs</span>
            <span>socket.io</span>
            <span>React</span>
            <span>VUE.js</span>
            <span>Angular</span>
            <span>Express</span>
            <span>ECMAScript</span>
            <span>Webpack</span>
            <span>GraphQL</span>

            <span>Javascript</span>
            <span>nodeJs</span>
            <span>socket.io</span>
            <span>React</span>
            <span>VUE.js</span>
            <span>Angular</span>
            <span>Express</span>
            <span>ECMAScript</span>
            <span>Webpack</span>
            <span>GraphQL</span>
          </span>
        </div>
      </div>
    )
  }
};

module.exports = {TodoAnimate}
