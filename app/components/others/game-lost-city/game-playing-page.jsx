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
        <div className="playing-table">
          <div className="enemy-hand">
            <div className="area-title"> 对方手牌 </div>
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
            <div className="area-title"> 对方出牌区 </div>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
          </div>
          <div className="public-pile">
            <div className="pile">
              <div className="area-title"> 牌堆 </div>
              <GameCard ></GameCard>
            </div>
            <div className="discard-pile">
              <div className="area-title"> 弃牌区 </div>
              <GameCard ></GameCard>
              <GameCard ></GameCard>
              <GameCard ></GameCard>
              <GameCard ></GameCard>
              <GameCard ></GameCard>
            </div>
          </div>
          <div className="my-pile">
            <div className="area-title"> 我的出牌区 </div>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
            <GameCard ></GameCard>
          </div>
          <div className="my-hand">
            <div className="area-title"> 我的手牌 </div>
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
      </div>
    )
  }
};

module.exports = {GamePlayingPage}
