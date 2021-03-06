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
    this.timeoutIds = [];
    this.transLines = [];
    this.getLines = this.getLines.bind(this)
    this.setBlock = this.setBlock.bind(this)
    this.setWordWhite = this.setWordWhite.bind(this)
    this.setWordBlack = this.setWordBlack.bind(this)
    this.setBlockOver = this.setBlockOver.bind(this)
    this.setLineNewWords = this.setLineNewWords.bind(this)
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
      })
      this.setState( { lines } )
      this.i = 0;
      this.timeoutIds[0] = setTimeout(this.setBlock, 5000)
    } else if (this.i == 2) {
      this.setWordWhite()
      this.timeoutIds[1] = setTimeout(this.setBlock, 5000)
    } else if (this.i == 4) {
      this.timeoutIds[2] = setTimeout(this.setBlock, 10000)
      this.i = 0
    } else if (this.i == 5) {
      this.timeoutIds[3] = setTimeout(this.setLineNewWords, 5000)
    } else if (this.i == 6 || this.i == 7) {
      this.timeoutIds[4] = setTimeout(this.setBlockOver, 4500)
    }
  }
  getLines() {
    Request.Keywords.getYoungCircle().then(resp => {
      if (resp.ok) {
        let lines = resp.data;
        let a = Math.floor(Math.random()*lines.length),
        b = Math.floor(Math.random()*lines.length);
        lines.splice(b, 0, Utils.copy(lines[a]))
        lines[b].name += 'i'
        this.transLines = [a, b]
        this.setState({
          lines: resp.data
        })
      }
    })
  }
  setBlock() {
    let l ,
      lines = Utils.copy(this.state.lines);
    if (this.i == 0) {
      l = this.transLines[1]
      this.i = 6
    } else if (this.i == 2) {
      this.i = 7
      l = this.transLines[0]
    }
    lines.forEach(i => { i.coverClass = "" })
    lines[l].coverClass = "cover-animate";
    this.setState({
      lines
    })
    if (this.i == 6) {
      this.timeoutIds[6] = setTimeout(this.setWordWhite, 4500)
    } else if (this.i == 7) {
      this.timeoutIds[7] = setTimeout(this.setWordBlack, 4500)
    }
  }
  setWordWhite() {
    let line;
    if (this.i == 0 || this.i == 6 || this.i == 5) {
      line = this.state.lines[this.transLines[1]]
    } else if(this.i == 2 || this.i == 7) {
      line = this.state.lines[this.transLines[0]]
    }
    this.refs[line.name].style.color = "snow"
  }
  setWordBlack() {
    let line = this.state.lines[this.transLines[0]]
    this.refs[line.name].style.color = "#000"
  }
  setBlockOver() {
    let l,
      lines = Utils.copy(this.state.lines);
    if (this.i == 6) {
       l = this.transLines[1]
       this.i = 5;
    } else if (this.i == 7) {
      l = this.transLines[0]
      this.i = 4
    }
    lines.forEach(i => {
      i.coverClass = ""
    })
    lines[l].coverClass = "cover-end-animate";
    this.setState({ lines })
  }
  setLineNewWords() {
    let lines = Utils.copy(this.state.lines),
      i = Math.floor(Math.random()*(lines.length-1));
    if (i >= this.transLines[1]) i++;
    let line = Utils.copy(lines[i])
    line.fadeClass = "fade-in-right" ? "fade-in-left" : "fade-in-right"
    line.name += "i"
    lines[this.transLines[1]] = line;
    this.transLines = [this.transLines[1], i]
    this.i = 2;
    this.setState({ lines })
  }

  closeAnimate() {
    this.timeoutIds.forEach(i => {
      clearTimeout(i)
    })
    this.props.closeAnimate()
  }

  render() {
    return (
      <div className="young-animate-tab">
        <div className="animate-table">
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

        <div className="close">
          <span className="icon-cross" onClick={this.closeAnimate.bind(this)}></span>
        </div>
        <div className="i-am-young">
          <span>
            I &nbsp; A M &nbsp; Y O U N G !
          </span>
        </div>
      </div>
    )
  }
};

module.exports = {YoungAnimate}
