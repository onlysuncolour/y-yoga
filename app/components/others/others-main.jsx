import React from 'react';
import {Link, Route, Switch, Redirect, NavLink, Match} from "react-router-dom"
// import {LostCity} from './game-lost-city/game-page'

import './others.less'

class OthersPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="others-main-page">
        others-page
        <Link className="link" to="/others/lost-city"> LOST CITY </Link>
      </div>
    )
  }
};

module.exports = {OthersPage}
