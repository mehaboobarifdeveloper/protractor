var AngularHomepage = function () {
  var todo = element(by.model('todoList.todoText'));
  var btnAdd = element(by.css('[value="add"]'));
  var todoList = element.all(by.repeater('todo in todoList.todos'));
  var checkbox = element(by.css('input'));
  var completedList = element.all(by.css('.done-true'));

  this.get = async function () {
    await browser.get('http://www.angularjs.org');
  };

  this.enterNewTodo = async function (todoName) {
    await todo.sendKeys(todoName);
  };

  this.clickAdd = async function () {
    await btnAdd.click();
  };

  this.getListCount = function () {
    return todoList.count();
  };

  this.getTextOfTodo = function (index) {
    return todoList.get(index).getText();
  };

  this.checkTodo = async function (index) {
    todoList.get(index).element(by.css('input')).click();

  };


  this.getCountOfCompletedTodo = async function (index) {
    return completedList.count()
  }

};
module.exports = new AngularHomepage();