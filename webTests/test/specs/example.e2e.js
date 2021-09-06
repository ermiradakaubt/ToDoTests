const TodoPage = require('../pageobjects/todo.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Todo Web Page Testing', () => {
    it('add todo in the list', async () => {
        await TodoPage.open()
        browser.pause(1000)
        //   await TodoPage.checkExistingTodos()
        await TodoPage.addTodo('smaple 1')
        browser.pause(1000)
        await expect(SecurePage.textInPage).toHaveTextContaining('todo');

        await TodoPage.addTodo('smaple 2')
        browser.pause(1000)

        await TodoPage.markCompleted()
        await TodoPage.checkExistingTodos()

    });

});


