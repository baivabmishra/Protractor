describe('Protractor element', function ()
{
    function add(a,b)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }
    it('Locators', function ()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(2,3);
        add(4,5);
        add(6,1);
        add(4,4);
        
        /*element(by.repeater('result in memory')).element(by.css('td:nth-child(2)')).getText().then(function (text)
        {
            console.log(text);
        });*/
        element.all(by.repeater('result in memory')).count().then(function (howmany)
        {
            console.log(howmany);    
        })
        element.all(by.repeater('result in memory')).each(function (item)
        {
            item.element(by.css('td:nth-child(3)')).getText().then(function (text)
            {
                console.log(text);    
            })    
        })
    });    
});