import React from 'react';
require('./young-animate.less')

class YoungAnimate extends React.Component{
  constructor() {
    super();
    this.state = {
      lines: [

      ]
    }
    this.i = 1
    this.transLines = [];
    this.getLines = this.getLines.bind(this)
    this.setBlock = this.setBlock.bind(this)
    this.setWordWhite = this.setWordWhite.bind(this)
    this.setBlockOver = this.setBlockOver.bind(this)
    this.getLines()
  }
  componentDidMount() {

  }
  componentDidUpdate() {
    if (this.i == 1 && this.state.lines && this.state.lines.length > 0) {
      let lines = Utils.copy(this.state.lines)
      lines.forEach((line, i) => {
        let speed = Math.random()*30+40;
        let width = this.refs[line.name].clientWidth
        width = width / 2
        var onceTime = width / speed * 1000; //ms
        line.animationDuration = onceTime+"ms"
        line.fadeClass = i%2? "fade-in-left" : "fade-in-right"
        // this.refs[line.name].style.animationDuration = onceTime + "ms"
      })
      this.setState( { lines } )
      this.i = 0;
      setTimeout(this.setBlock, 5000)
    } else if (this.i == 2) {

    } else if (this.i == 3) {

    }
  }
  getLines() {
    Request.Keywords.getYoungCircle().then(resp => {
      if (resp.ok) {
        let lines = resp.data;
        let a = Math.floor(Math.random()*lines.length),
        b = Math.floor(Math.random()*lines.length);
        lines.splice(b, 0, Utils.copy(lines[a]))
        lines[b].name += '_c'
        this.transLines = [a, b]
        this.setState({
          lines: resp.data
        })
      }
    })
  }
  setBlock() {
    let l = this.transLines[1],
      lines = Utils.copy(this.state.lines);
    lines.forEach(i => {
      i.coverClass = ""
    })
    lines[l].coverClass = "cover-animate";
    this.setState({
      lines
    })
    setTimeout(this.setWordWhite, 4500)
    setTimeout(this.setBlockOver, 4500)
    // this.refs[line.name].style.animationDuration = onceTime + "ms"
  }
  setWordWhite() {
    let line = this.state.lines[this.transLines[1]]
    this.refs[line.name].style.color = "snow"
  }
  setBlockOver() {
    let l = this.transLines[1],
      lines = Utils.copy(this.state.lines);
    lines.forEach(i => {
      i.coverClass = ""
    })
    lines[l].coverClass = "cover-end-animate";
    this.setState({
      lines
    })
  }

  render() {
    return (
      <div className="young-animate-tab">
        {
          this.state.lines.map((line, index) => (
            <div className="line" key={line.name}>
              <div className={`content ${line.fadeClass}`} ref={line.name}
                 style={{animationDuration: line.animationDuration || "10s"}} >
                {
                  line.words.map(span => (
                    <div className="wd" key={span}>
                      <span className={`word`}>{span}</span>
                      <span className={`cover ${line.coverClass}`}></span>
                    </div>
                  ))
                }
                {
                  line.words.map(span => (
                    <div className="wd" key={span}>
                      <span className={`word`}>{span}</span>
                      <span className={`cover ${line.coverClass}`}></span>
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
