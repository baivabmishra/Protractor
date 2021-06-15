describe('Protractor element', function ()
{
    it('Locators', function ()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();
        /*element(by.css("h2[class='ng-binding']")).getText().then(function (abc)
        {
            
            console.log(abc+ ' is the answer!');
        })
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('8');*/
        element(by.repeater('result in memory')).element(by.css('td:nth-child(2)')).getText().then(function (text)
        {
            console.log(text);
        });
    });    
});