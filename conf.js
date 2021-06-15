var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['jsobject2.js'],
    onPrepare: function () {
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },
    suites:
    {
        Smoke: ['locators.js'],
        Regression: 'jsobject2.js'
    },
    /*jasmineNodeOpts:
    {
        showColors: true, // Use colors in the command line report.
    }*/
};