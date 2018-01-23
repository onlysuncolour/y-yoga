import React from 'react';
const Markdown = require('react-markdown');
import { Link } from "react-router-dom";
import './blog-main.less';

class BlogPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    const input = '# This is a header\n\nAnd this is a paragraph'

    return (
      <div>
        blog-page
        <br/>
        <Link className='link-test' to="/blog-edit"> 新建 </Link>
        <Markdown source={input} />
      </div>
    )
  }
};

module.exports = {BlogPage}
