import React from 'react';

class GameCard extends React.Component {
  constructor() {
    super()
    this.pickCard = this.pickCard.bind(this)
    this.playCard = this.playCard.bind(this)
    this.discardCard = this.discardCard.bind(this)
  }
  pickCard() {

  }
  playCard() {

  }
  discardCard() {

  }
  render() {
    const CardNumber = (cardNumber) => {
      if (cardNumber) {
        return (
          <div className="card-number">
            { cardNumber }
          </div>
        )
      } else if (cardNumber === 0) {
        return (
          <div className="card-investment">
            投资卡
          </div>
        )
      }
    }
    const Buttons = () => {
      let card = this.props.card, status = this.props.status
      let bt1, bt2;
      if (card.public && status == 2) {
        bt1 =
          <div className="pick-card-btns">
            <button onClick={this.pickCard}>摸牌</button>
          </div>
      }
      if (card.mine && status == 1) {
        bt2 =
        <div className="my-card-btns">
          <button onClick={this.playCard}>出牌</button>
          <button onClick={this.discardCard}>弃牌</button>
        </div>
      }
      return (
        <div>
          {bt1}
          {bt2}
        </div>
      )
    }
    return (
      <div className={`lost-city-card ${
          { true: "card-back",
            red: "card-red",
            green: "card-green",
            blue: "card-blue",
            yellow: "card-yellow",
            white: "card-white",
          } [this.props.card.back||this.props.card.color] }`}>
          {CardNumber(this.props.card.content)}
          {Buttons()}
      </div>
    )
  }
}

module.exports = {GameCard}
