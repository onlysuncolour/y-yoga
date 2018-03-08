module.exports = {
  sayHello () {
    console.log('hello')
  },
  formatDate: (i) => {
    if (!i) {
      return null
    } else if (!isNaN(i)) {
      return Manba(+i).format('YYYY-MM-DD')
    } else {
      return Manba(i).format('YYYY-MM-DD')
    }
  }
}
