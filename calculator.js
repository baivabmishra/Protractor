describe('Protractor element', function ()
{
    function cal(a,b,c)
    {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element.all(by.tagName('option')).each(function (item)
        {
            item.getAttribute('value').then(function (operation)
            {
                if (operation == c)
                {
                    item.click();
                }   
            })  
        })
        element(by.id('gobutton')).click();
    }
    it('Locators', function ()
    {
        browser.get('http://juliemr.github.io/protractor-demo/');
        cal(2,3,'MULTIPLICATION');
        cal(4,5,'ADDITION');
        cal(6,1,'SUBTRACTION');
        cal(6,3,'DIVISION');
        
        /*element.all(by.tagName('option')).each(function (item)
        {
            item.getAttribute('value').then(function (operation)
            {
                console.log(operation);    
            })  
        })*/
        element.all(by.repeater('result in memory')).each(function (eachoperation)
        {
            eachoperation.element(by.css('td:nth-child(3)')).getText().then(function (result)
            {
                console.log(result);    
            });
        });
    });    
});