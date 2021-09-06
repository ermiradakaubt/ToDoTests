const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TodoPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputTodo() { return $('div [class="new-todo"]') }
    get todoList() { return $('div [class="todo-list"]') }


    get firstTodo() { return $('div [data-reactid=".0.1.2.$ab369f10-36be-49e0-a13e-7b91426d9168"]') }
    get secondTodo() { return $('div [data-reactid=".0.1.2.$8a61ccdd-059e-4899-9338-98fdb0f3fe50"]') }
    get thirdTodo() { return $('div [data-reactid=".0.1.2.$5f8ec804-3e46-407f-b41e-0bf4b75994b3"]') }

    get firstCompleted() { return $('div [class="toggle"') }
    get secondCompleted() { return $('div [class="toggle"]')[1] }
    get thirdCompleted() { return $('div [class="toggle"]')[2] }


    get toggleCOmpleteAll() { return $('div [for="toggle-all"]') }

    get allTodos() { return $('div [href="#/"]') }
    get activeTodos() { return $('div [href="#/active"]') }
    get completedTodos() { return $('div [href="#/completed"]') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addTodo(todo) {
        await browser.setWindowSize(3000, 2000)
        await browser.pause(1000)

        await this.inputTodo.setValue(todo);
        await browser.pause(1000)
        await browser.keys("\uE007");
        await browser.pause(2000)
    }

    async markCompleted() {
        await browser.pause(2000)
        await browser.setWindowSize(3000, 2000)
        await browser.pause(4000)
        await this.toggleCOmpleteAll.click()
        await browser.pause(2000)
        await this.toggleCOmpleteAll.click()
        await browser.pause(2000)


        // await this.firstCompleted

    }
    async checkExistingTodos() {
        await browser.pause(2000)
        console.log('------------------------');
        console.log(await $$('div [class="todo-list"]').children[1])



        await browser.pause(2000)
        await this.allTodos.click()
        await browser.pause(2000)
        await this.completedTodos.click()

    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open();
    }
}

module.exports = new TodoPage();
