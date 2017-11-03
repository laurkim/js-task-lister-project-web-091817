/*
list is responsible for creating a single list component
*/
let allLists = []

const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?
      this.id = id++;
      this.title = title;
      allLists.push(this)
    }
    static all() {
      return allLists;
    }
  }

})()
