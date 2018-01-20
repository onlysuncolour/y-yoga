// import '../node_modules/bootstrap/scss/bootstrap.scss';
import './styles/main.less'
import React from 'react';
import ReactDOM from 'react-dom';
import {main} from './components/main'

window.env = "development";

const app = document.createElement('div');
app.id = "main";
document.body.appendChild(app);
ReactDOM.render(main, app);
