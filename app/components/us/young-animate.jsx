import React from 'react';
require('./young-animate.less')

class YoungAnimate extends React.Component{
  constructor() {
    super();
    this.state = {
      lines: [{
        name: "line1", speed: 20, spans: [
        "JAVASCRIPT",
        "NODEJS",
        "SOCKET.IO",
        "REACT",
        "VUE.JS",
        "ANGULAR",
        "EXPRESS",
        "ECMASCRIPT",
        "WEBPACK",
        "GRAPHQL",
      ]}, {
        name: "line2", speed: 30, spans: [
        "HELLO WORLD",
        "VAR",
        "ASYNC/AWAIT",
        "LET",
        "CALLBACK",
        "CONSOLE.LOG",
        "DEBUGGER",
        "CONST",
        "FUNCTION",
      ]}, {
        name: "line3", speed: 50, spans: [
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
      <div className="young-animate-tab">
        {
          this.state.lines.map((line, index) => (
            <div className="line" key={line.name}>
              <div className={`content ${index%2==0? "fade-in-left" : "fade-in-right"}`} ref={line.name} >
                {
                  line.spans.map(span => (
                    <div className="wd" key={span}>
                      <span className="word">{span}</span>
                      <span className="cover"></span>
                    </div>
                  ))
                }
                {
                  line.spans.map(span => (
                    <div className="wd" key={span}>
                      <span className="word">{span}</span>
                      <span className="cover"></span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    )
  }
};

module.exports = {YoungAnimate}
