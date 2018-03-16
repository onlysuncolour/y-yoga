import React from 'react';

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
      if (resp.ok && resp.data.userId) {
        store.dispatch(setMe(resp.data))
        store.dispatch(removePopup())
      }
    })
  }
  render() {
    return (
      <div className="login-page">
        <span>登陆</span>
        <div className="form-tab">
          <div className="input-tab">
            <span> username </span>
              <input type="text" value={this.state.username} name="username" onChange={this.handleInput} />
          </div>
          <div className="input-tab">
            <span> password </span>
            <input type="password" value={this.state.password} name="password" onChange={this.handleInput} />
          </div>
          <div className="bottom-button">
            <button onClick={this.login}> 登陆 </button>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {LoginPage}
