import React from 'react';

class BlogCategory extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  changeCategory(c) {
    if (this.props.currentCategory._id == c._id) {
      return;
    }
    this.props.changeCategory(c)
  }
  render() {
    return (
      <div className="blog-category">
        {this.props.category.map(i => {
          return (
            <div key={i._id}
              className={`category-item ${
                {true: 'selected-category-item'}[this.props.currentCategory._id == i._id]
              }`}
            >
            <span onClick={this.changeCategory.bind(this, i)}>{i.title}</span>
            </div>
          )
        })}
      </div>
    )
  }
};

module.exports = {BlogCategory}
