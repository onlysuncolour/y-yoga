import './styles/normalize.css'
import './styles/common.less'
import './styles/main.less'

import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './components/main'

require('codemirror/lib/codemirror.css') // codemirror
require('tui-editor/dist/tui-editor.css'); // editor ui
require('tui-editor/dist/tui-editor-contents.css'); // editor content
require('highlight.js/styles/github.css'); // code block highlight

window.env = "development";

const app = document.createElement('div');
app.id = "main";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
