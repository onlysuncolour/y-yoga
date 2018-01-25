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
          <ul>
            <span> todos: </span>
            {
              this.props.todo.todos.filter(i => i.type=="todo").map( i => (
                <li> {i.title} </li>
              ))
            }
            <li></li>
          </ul>
        </div>
        <div>
          <ul>
            <span> dones: </span>
            {
              this.props.todo.todos.filter(i => i.type=="done").map( i => (
                <li> {i.title} </li>
              ))
            }
          </ul>
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
