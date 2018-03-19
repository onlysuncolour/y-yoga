import React from 'react';
import { connect } from 'react-redux';
import { getTodoList, addTodo, addDone, updateTodo, removeTodo} from 'actions';
import  {default as styled} from 'styled-components'
import './todo-main.less'
import {TodoCategory} from './todo-category'

class TodoPage extends React.Component{
  constructor() {
    super();
    this.state = {
      newTodo: "",
      type: 'all',
      updatingId: null,
      updatingTitle: "",
    }
    this.addNewTodo = this.addNewTodo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setDone = this.setDone.bind(this)
    this.typeStyle = this.typeStyle.bind(this)
  }
  componentWillMount() {
    store.dispatch(getTodoList());
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value
    this.setState(newState);
  }

  changeUpdatingTitle(event) {
    this.setState({
      updatingTitle: event.target.value
    })
  }

  setDone(data) {
    this.state
    store.dispatch(addDone( data ));
  }

  addNewTodo() {
    if(this.state.newTodo == '') {
      return;
    }
    store.dispatch(addTodo(this.state.newTodo));
    this.setState({
      newTodo: ""
    });
  }

  onKeyup(e) {
    e.keyCode === 13 && this.addNewTodo();
  }

  updatingTodo(todo) {
    this.setState({
      updatingId: todo._id,
      updatingTitle: todo.title
    })
  }

  setTodo(todo) {
    todo.type = 'todo'
    store.dispatch(updateTodo( todo ));
  }

  onKeyupTodo(e) {
    if (e.keyCode === 13) {
      if (this.state.updatingTitle == "") {
        return
      }
      let todo = this.props.todos.filter(i => i._id == this.state.updatingId)[0];
      todo.title = this.state.updatingTitle;
      store.dispatch(updateTodo( todo ));
      this.setState({
        updatingId: null,
        updatingTitle: "",
      })
    } else if (e.keyCode === 27) {
      this.setState({
        updatingId: null,
        updatingTitle: "",
      })
    }
  }

  changeTodoType(type) {
    this.setState({
      type
    })
  }

  removeTodo(todo) {
    store.dispatch(removeTodo(todo))
  }

  typeStyle(type) {
    if (this.state.type == type) {
      return "todo-type-selected"
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  cancelUpdatingTodo() {
    this.setState({
      updatingId: null,
      updatingTitle: "",
    })
  }

  updateSQL() {
    Request.Todo.updateSQL()
  }

  render() {
    return (
      <div className="todo-main-page" onClick={this.cancelUpdatingTodo.bind(this)}>
        <div className="container">
          <div className="todo-page-title">
            <span className="title">todos</span>
            <input className="new-todo" placeholder="Hey, what needs to be done?" value={this.state.newTodo} name="newTodo" onChange={this.handleChange} onKeyUp={this.onKeyup.bind(this)} />
            <div className="todo-type-tab">
              <span className={'todo-type '+this.typeStyle('all')} onClick={this.changeTodoType.bind(this, 'all')}>ALL</span>
              <span className={'todo-type '+this.typeStyle('todo')} onClick={this.changeTodoType.bind(this, 'todo')}>ACTIVE</span>
              <span className={'todo-type '+this.typeStyle('done')} onClick={this.changeTodoType.bind(this, 'done')}>COMPLETED</span>
            </div>
          </div>
          <div className="list">
            <ul>
              {
                this.props.todos.filter(i => {
                  if (this.state.type == 'all') {
                    return true
                  } else return i.type == this.state.type
                }).sort( (a, b) => {
                  if (a.type == 'todo' && b.type == 'done') { return -1 }
                  else if (a.type == 'done' && b.type == 'todo') { return 1 }
                  else { return b.updatedAt - a.updatedAt }
                }).map( i => {
                  if (i.type == 'todo') {
                    if (i._id == this.state.updatingId) {
                      return (
                        <div className="todo" key={i._id}>
                          <div className="circle-blank" onClick={this.setDone.bind(this, i)}></div>
                          <input value={this.state.updatingTitle} onChange={this.changeUpdatingTitle.bind(this)} onKeyUp={this.onKeyupTodo.bind(this)} className="todo-input" placeholder="Edit Todo" onClick={this.stopPropagation}></input>
                        </div>
                      )
                    } else {
                      return (
                        <div className="todo" key={i._id}>
                          <div className="circle-blank" onClick={this.setDone.bind(this, i)}></div>
                          <label className="todo-title" onDoubleClick={this.updatingTodo.bind(this, i)}>{i.title}</label>
                          <span className="icon-trash-o todo-delete" onClick={this.removeTodo.bind(this, i)}></span>
                        </div>
                      )
                    }
                  } else if (i.type == 'done') {
                    return (
                      <div className="done" key={i._id}>
                        <div className="circle-solid" onClick={this.setTodo.bind(this, i)}></div>
                        <div className="done-title">{i.title}</div>
                        <span className="icon-trash-o todo-delete" onClick={this.removeTodo.bind(this, i)}></span>
                      </div>
                    )
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (store) => {
  console.log(1);
  return {
    todos: store.todo.todos
  }
}

module.exports = {TodoPage: connect(mapStateToProps)(TodoPage)}
