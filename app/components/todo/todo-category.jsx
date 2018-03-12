import React from 'react';

class TodoCategory extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {

  }
  showRules() {

  }
  render() {
    return (
      <div className="todo-category-tab">
        <div className="todo-category-flag">
          current category
        </div>
      </div>
    )
  }
};

module.exports = {TodoCategory}
