import React from 'react';
import Markdown from 'react-markdown'

import './blog-edit.less'

class BlogEdit extends React.Component {
  constructor() {
    super();
  }
  componentDidMount () {}
  render () {
    const input = '# This is a header\n\nAnd this is a paragraph'
    return (
      <div>
        <Markdown source={input} />
      </div>
    )
  }
}

module.exports = {BlogEdit}
