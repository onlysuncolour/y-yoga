import React from 'react';
require('./todo-animate.less')

class TodoAnimate extends React.Component{
  constructor() {
    super();
    this.state = {
      lines: [{
        name: "line1", speed: 80, spans: [
        "Javascript",
        "nodeJs",
        "socket.io",
        "React",
        "VUE.js",
        "Angular",
        "Express",
        "ECMAScript",
        "Webpack",
        "GraphQL",
      ]}, {
        name: "line2", speed: 120, spans: [
        "hello world",
        "var",
        "Async/Await",
        "let",
        "callback",
        "console.log",
        "debugger",
        "const",
        "function",
      ]}, {
        name: "line3", speed: 100, spans: [
        "FREE THINKING",
        "FSOCIETY",
        "HACKER",
        "THIS IS US",
        "YOUNG",
        "KEEP FOOLISH",
        "DESIGN",
        "BLOCKCHAIN"
      ]}]
    }
  }
  componentDidMount() {

  }
  componentDidUpdate() {
    this.state.lines.forEach(line => {
      let speed = line.speed;
      let width = this.refs[line.name].clientWidth
      width = width / 2
      var onceTime = width / speed * 1000; //ms
      this.refs[line.name].style.animationDuration = onceTime + "ms"
    })
  }
  render() {
    return (
      <div className="todo-animate-tab">
        {
          this.state.lines.map((line, index) => (
            <div className="line" key={line.name}>
              <span className={`content ${index%2==0? "fade-in-left" : "fade-in-right"}`} ref={line.name} >
                {
                  line.spans.map(span => (
                    <span key={span}>{span}</span>
                  ))
                }
                {
                  line.spans.map(span => (
                    <span key={span}>{span}</span>
                  ))
                }
              </span>
            </div>
          ))
        }
      </div>
    )
  }
};

module.exports = {TodoAnimate}
