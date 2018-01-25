import React from 'react';
import { connect } from 'react-redux';
import {store} from "app/common/redux/store";
import { getTodoList, addTodo, addDone} from 'actions/todoActions';

class TodoPage extends React.Component{
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
    this.addNewTodo = this.addNewTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setDone = this.setDone.bind(this)
  }
  componentWillMount() {
    store.dispatch(getTodoList());
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }

  setDone(event) {
    store.dispatch(addDone( {id:event.target.value} ));
  }

  addNewTodo() {
    // console.log(123)
    store.dispatch(addTodo(this.state.newTodo));
    this.setState({
      newTodo: ""
    });
  }

  render() {
    return (
      <div style={ {'marginTop': '100px'} }>
        todo-page
        <div>
          <ul>
            <span> todos: </span>
            {
              this.props.todo.todos.filter(i => i.type=="todo").map( i => (
                <li key={i.id}> {i.title}
                  <button onClick={this.setDone} value={i.id}> done</button>
                </li>
              ))
            }
            <li>
              <input type="text" value={this.state.newTodo} name="newTodo" onChange={this.handleChange} />
              <button onClick={this.addNewTodo}> 添加 </button>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <span> dones: </span>
            {
              this.props.todo.todos.filter(i => i.type=="done").map( i => (
                <li key={i.id}> {i.title} </li>
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
