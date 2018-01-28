import Ajax from './ajax'
module.exports = {
  getTodoList () {
    return Ajax.GET('/todo/getlist');
    // console.log('hello')
  }
}
