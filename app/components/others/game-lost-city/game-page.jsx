import React from 'react';

import {GameWaitingPage} from './game-waiting-page.jsx'
import {GamePlayingPage} from './game-playing-page.jsx'
require('./game-lost-city.less')
class LostCity extends React.Component{
  constructor() {
    super();
    this.state = {
      waiting: false
    }
  }
  playGame() {
    Request.Game.LostCity.joinGame().then(resp => {
      if (resp.ok) {
        Socket.joinGame(resp.data.roomName)
        this.setState({
          waiting: false
        })
      }
    }, error => {

    })
  }
  componentDidMount() {

  }
  render() {
    let GamePage;
    if (this.state.waiting) {
      GamePage = <GameWaitingPage playGame={this.playGame.bind(this)}> </GameWaitingPage>;
    } else {
      GamePage = <GamePlayingPage > </GamePlayingPage>;
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
