import React from 'react';

class BlogCategory extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  changeCategory(c) {
    if (this.props.currentCategory.id == c.id) {
      return;
    }
    this.props.changeCategory(c)
  }
  render() {
    return (
      <div className="blog-category">
        {this.props.category.map(i => {
          return (
            <div key={i.id}
              className={`category-item ${
                {true: 'selected-category-item'}[this.props.currentCategory.id == i.id]
              }`}
            >
            <span onClick={this.changeCategory.bind(this, i)}>{i.name}</span>
            </div>
          )
        })}
      </div>
    )
  }
};

module.exports = {BlogCategory}
