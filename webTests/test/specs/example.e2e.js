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
        await expect(SecurePage.textInFrame).toHaveTextContaining('All');
        await expect(SecurePage.textInFrame).toHaveTextContaining('Active');

        await expect(SecurePage.textInFrame).toHaveTextContaining('2 items left');

    });

});


