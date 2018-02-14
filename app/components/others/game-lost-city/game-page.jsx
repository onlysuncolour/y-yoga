import React from 'react';

import {GameWaitingPage} from './game-waiting-page'
import {GamePlayingPage} from './game-playing-page'

class LostCity extends React.Component{
  constructor() {
    super();
    this.state = {
      waiting: true
    }
  }
  playGame() {
    this.setState({
      waiting: false
    })
  }
  componentDidMount() {

  }
  render() {
    let GamePage;
    if (this.state.waiting) {
      GamePage = <GameWaitingPage playGame={this.playGame.bind(this)}> </GameWaitingPage>;
    } else {
      GamePage = <GamePlayingPage> </GamePlayingPage>;
    }
    return (
      <div className="lost-city-game-page">
        lost city
        { GamePage }
      </div>
    )
  }
};

module.exports = {LostCity}
