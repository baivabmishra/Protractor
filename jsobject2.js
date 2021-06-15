describe('Protractor element', function () {
    var cal = require('./jsobject.js');
    var using = require('jasmine-data-provider');
    var d = require('./datadriven.js');
    beforeEach(function () {
        cal.getURL();
    });

    using(d.datadrive, function (data, description) {
        it('Test Result of ' + description, function () {
            cal.firstInput.sendKeys(data.first_input);
            cal.secondInput.sendKeys(data.second_input);
            cal.goButton.click();
            cal.result.getText().then(function (abc) {

                console.log(abc + ' is the answer!');
            })
            expect(cal.result.getText()).toBe(data.result);
            /*element(by.repeater('result in memory')).element(by.css('td:nth-child(2)')).getText().then(function (text)
            {
                console.log(text);
            });*/
        });
    });

    afterEach(function () {
        console.log('Test is complete!');
    });
});