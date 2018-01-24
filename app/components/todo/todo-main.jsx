import React from 'react';
import { connect } from 'react-redux';
import {store} from "app/common/redux/store";
import { getTodoList } from 'actions/todoActions';

class TodoPage extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
    store.dispatch(getTodoList());
  }

  render() {
    return (
      <div>
        todo-page
        <div>
          {
            this.props.todo.todos.map( i => (
              <span> {i.title} </span>
            ))
          }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    todo: store.todo
  }
}

module.exports = {TodoPage: connect(mapStateToProps)(TodoPage)}
