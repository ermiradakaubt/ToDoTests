const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get textInPage() { return $('div [data-reactid=".0.0.0"]') }
}

module.exports = new SecurePage();
