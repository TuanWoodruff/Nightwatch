module.exports = {
    '@tags' : ['google'],
    'First test case' (browser){
        const mainQuery = 'Elon Musk';
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdown = '#as_qdr_button';
        const lastUpdateDropdwnSelector = '.goog-menuitem[value="m"]';
        const submitButton = '.jfk-button[type="submit"]';

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdown)
            .click(lastUpdateDropdwnSelector)
            .click(submitButton)
            .saveScreenshot('tests_output/google.png')

    }
}