import './styles/normalize.css'
import './styles/markdown.css'
import './styles/prism.css'
import './styles/common.less'
import './styles/main.less'

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app'
window.env = "development";

const app = document.createElement('div');
app.id = "app";
document.body.appendChild(app);
ReactDOM.render(<App />, app);
