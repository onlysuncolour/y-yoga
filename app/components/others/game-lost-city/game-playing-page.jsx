import React from 'react';

import {GameCard} from './game-card'
class GamePlayingPage extends React.Component{
  constructor() {
    super();
    this.state = {
      pileCounts: 22,
      status: 1,
      enemyHand: [
        {id: -1, back: true},
        {id: -2, back: true},
        {id: -3, back: true},
        {id: -4, back: true},
        {id: -5, back: true},
        {id: -6, back: true},
        {id: -7, back: true},
        {id: -8, back: true}
      ],
      enemyPile: [
        {id: 0, color: 'red', content: 4},
        {id: 1, color: 'green', content: 5},
        {id: 2, color: 'blue', content: 8},
        {id: 3, color: 'yellow', content: 2},
        {id: 4, color: 'white', content: 0},
      ],
      pile: [{id: -9, back: true, public: true}],
      discardPile: [
        {id: 5, color: 'red', content: 2, public: true},
        {id: 6, color: 'green', content: 7, public: true},
        {id: 7, color: 'blue', content: 5, public: true},
        {id: 8, color: 'yellow', content: 6, public: true},
        {id: 9, color: 'white', content: 0, public: true},
      ],
      myPile: [
        {id: 10, color: 'red', content: 3},
        {id: 11, color: 'green', content: 1},
        {id: 12, color: 'blue', content: 0},
        {id: 13, color: 'yellow', content: 4},
        {id: 14, color: 'white', content: 2},
      ],
      myHand: [
        {id: 15, color: 'green', content: 9, mine: true},
        {id: 16, color: 'green', content: 8, mine: true},
        {id: 17, color: 'blue', content: 10, mine: true},
        {id: 18, color: 'yellow', content: 7, mine: true},
        {id: 19, color: 'white', content: 4, mine: true},
        {id: 20, color: 'blue', content: 7, mine: true},
        {id: 21, color: 'white', content: 5, mine: true},
        {id: 22, color: 'white', content: 8, mine: true},
      ],
      eventListeners: []
    }
    this.setCards = this.setCards.bind(this);
    this.pickCard = this.pickCard.bind(this);
    this.discardCard = this.discardCard.bind(this);
    this.playCard = this.playCard.bind(this);
    this.doGameAction = this.doGameAction.bind(this);

    this.state.eventListeners.push(
      G.addlistener('lost-city-game-action', data => {
        this.doGameAction(data)
      })
    )

  }
  componentDidMount() {

  }
  doGameAction(data) {

  }
  setCards(cardList) {
    // if (cardList.enemyHand) {
    //   cardList.enemyHand.forEach((i, n) => {i.id = -n-1} )
    //   this.setState({
    //     enemyHand: cardList.enemyHand
    //   })
    // } else if (!this.state.enemyHand || this.state.enemyHand.length == 0) {
    //   this.setState({
    //     enemyHand: [
    //       {id: -1, back: true},
    //       {id: -2, back: true},
    //       {id: -3, back: true},
    //       {id: -4, back: true},
    //       {id: -5, back: true},
    //       {id: -6, back: true},
    //       {id: -7, back: true},
    //       {id: -8, back: true},
    //     ]
    //   })
    // }
    // if (cardList.enemyPile) {
    //   this.setState({
    //     enemyPile: cardList.enemyPile
    //   })
    // } else if (!this.state.enemyPile || this.state.enemyPile.length == 0) {
    //   this.setState({
    //     enemyHand: [
    //       {id: -1, color: 'red', empty: true},
    //       {id: -2, color: 'green', empty: true},
    //       {id: -3, color: 'blue', empty: true},
    //       {id: -4, color: 'yellow', empty: true},
    //       {id: -5, color: 'white', empty: true},
    //     ]
    //   })
    // }
  }
  pickCard(card) {
    console.log('pickCard', card);
  }
  discardCard(card) {
    console.log('discardCard', card);
  }
  playCard(card) {
    console.log('playCard', card);
  }
  render() {
    let getGameCard = (card, area) => {
      return (
        <GameCard card={card} key={card.id} area={area} status={this.state.status} pickCard={this.pickCard}
          discardCard={this.discardCard} playCard={this.playCard} />
      )
    }
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
              { this.state.enemyHand.map(i => getGameCard(i, 'enemyHand')) }
          </div>
          <div className="enemy-pile">
            <div className="area-title"> 对方出牌区 </div>
              { this.state.enemyPile.map(i => getGameCard(i, 'enemyPile'))}
          </div>
          <div className="public-pile">
            <div className="pile">
              <div className="area-title"> 牌堆 {this.state.pileCounts}张 </div>
              { this.state.pile.map(i => getGameCard(i, 'pile'))}
            </div>
            <div className="discard-pile">
              <div className="area-title"> 弃牌区 </div>
              { this.state.discardPile.map(i => getGameCard(i, 'discardPile'))}
            </div>
          </div>
          <div className="my-pile">
            <div className="area-title"> 我的出牌区 </div>
            { this.state.myPile.map(i => getGameCard(i, 'myPile'))}
          </div>
          <div className="my-hand">
            <div className="area-title"> 我的手牌 </div>
            { this.state.myHand.map(i => getGameCard(i, 'myHand'))}
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {GamePlayingPage}
