import React from 'react';

import {GameCard} from './game-card'
class GamePlayingPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="lost-city-game-playing-page">
        lost-city-game-playing
        <div className="game-info">
          <div className="game-title">
            失落之城
          </div>
          <div className="players">
            abc VS edf
          </div>
          <div className="buttons">
            查看规则
            退出
            认输
          </div>
        </div>
        <div className="enemy-hand">
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
          <GameCard back="true"></GameCard>
        </div>
        <div className="enemy-pile">
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
        </div>
        <div className="discard-pile">
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
        </div>
        <div className="pile">
          <GameCard ></GameCard>
        </div>
        <div className="my-pile">
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
          <GameCard ></GameCard>
        </div>
        <div className="my-hand">
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
          <GameCard operate></GameCard>
        </div>
      </div>
    )
  }
};

module.exports = {GamePlayingPage}
