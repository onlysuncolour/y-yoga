import React from 'react';

class GameCard extends React.Component {
  constructor() {
    super()
  }
  render() {
    // let card;
    if (this.props.card.back) {
      return (
        <div className="lost-city-card card-back">

        </div>
      )
    } else {
      return (
        <div className="lost-city-card">

        </div>
      )
    }
    // return (
    //
    // )
  }
}

module.exports = {GameCard}
