import './styles/normalize.css'
import './styles/markdown.css'
import './styles/prism.css'
import './styles/common.less'
import './styles/main.less'

import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './components/main'

window.env = "development";

const app = document.createElement('div');
app.id = "main";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
