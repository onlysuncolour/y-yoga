import React from 'react';
import { connect } from 'react-redux';
import {store} from "app/common/redux/store";
import { getTodoList, addTodo, addDone} from 'actions';
import  {default as styled} from 'styled-components'


const Todo = styled.li`
  margin: 10px;
  padding: 10px;
  width: 500px;
  &:hover {
    background: antiquewhite;
  }
  .title {
    color: cornflowerblue;
  }
  button {
    border: 1px solid #777;
    width: 60px;
    border-radius: 2px;
    float: right;
    cursor: pointer;
  }
`
const TodoInputLi = styled.li`
  margin: 10px;
  padding: 10px;
  width: 500px;
  .title {
    margin-right: 10px;
  }
  input {
    width: 300px;
    line-height: 30px;
  }
  button {
    border: 1px solid #777;
    width: 60px;
    border-radius: 2px;
    float: right;
    cursor: pointer;
  }
`
const Done = styled.li`
  margin: 10px;
  padding: 10px;
  width: 500px;
  .title {
    color: cadetblue;
  }
`

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

  setDone(id) {
    store.dispatch(addDone( {id} ));
  }

  addNewTodo() {
    store.dispatch(addTodo(this.state.newTodo));
    this.setState({
      newTodo: ""
    });
  }

  render() {
    return (
      <div classNamw="todo-main-page" style={ {'marginTop': '100px'} }>
        todo-page
        <div className="container">
          <ul>
            <span> TODOs: </span>
            {
              this.props.todo.todos.filter(i => i.type=="todo").map( i => (
                <Todo key={i.id}>
                <span className="title"> {i.title} </span>
                  <button onClick={this.setDone.bind(this, i.id)} value={i.id}> done</button>
                </Todo>
              ))
            }
            <TodoInputLi>
              <span className="title">new Todo:</span>
              <input type="text" value={this.state.newTodo} name="newTodo" onChange={this.handleChange} />
              <button onClick={this.addNewTodo}> 添加 </button>
            </TodoInputLi>
          </ul>
        </div>
        <div>
          <ul>
            <span> DONEs: </span>
            {
              this.props.todo.todos.filter(i => i.type=="done").map( i => (
                <Done key={i.id}> <span className="title">{i.title}</span> </Done>
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
