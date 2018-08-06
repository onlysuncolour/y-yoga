import React from 'react';

import './login.less'
import { removePopup, setMe } from 'actions';

class LoginPage extends React.Component{
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
    this.handleInput = this.handleInput.bind(this)
    this.login = this.login.bind(this)
  }
  componentDidMount() {

  }
  handleInput(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }
  login() {
    if (!this.state.username || !this.state.password) {
      this.alert("请完善信息！")
      return
    }
    Request.User.login({
      username: this.state.username,
      password: this.state.password,
    }).then(resp => {
      if (resp.ok && resp.data._id) {
        store.dispatch(setMe(resp.data))
        store.dispatch(removePopup())
      }
    })
  }
  render() {
    return (
      <div className="login-page">
        {/* <header className="popup-header">登录</header> */}
        <div className="form-tab">
          <div className="input-tab">
            <p className="input-label"> username </p>
            <input className="input" type="text" value={this.state.username} name="username" onChange={this.handleInput} />
          </div>
          <div className="input-tab">
            <p className="input-label"> password </p>
            <input className="input" type="password" value={this.state.password} name="password" onChange={this.handleInput} />
          </div>
          <footer className="popup-footer">
            <button className="y-btn" onClick={this.login}> 登录 </button>
          </footer>
        </div>
      </div>
    )
  }
};

module.exports = {LoginPage}
