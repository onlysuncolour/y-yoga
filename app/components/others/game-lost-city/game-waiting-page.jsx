import React from 'react';

class GameWaitingPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  showRules() {

  }
  render() {
    return (
      <div className="lost-city-game-waiting-page">
        lost-city-game-waiting
        <button onClick={this.props.playGame}>游戏开始</button>
      </div>
    )
  }
};

module.exports = {GameWaitingPage}
