//Import page object created
var homepage = require('../po/HomePage');

describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {

    homepage.get();
    
    homepage.enterNewTodo('write first protractor test');
    homepage.clickAdd();
    //Check if todo got added
    expect(homepage.getListCount()).toEqual(3);
    expect(homepage.getTextOfTodo(2)).toEqual('write first protractor test');

    // //Check the added todo
    homepage.checkTodo(2);
    expect(homepage.getCountOfCompletedTodo()).toEqual(2);

  });
});

