describe('Practice Excersie', function ()
{
    function selectitem(product)
    {
        element.all(by.tagName('app-card')).each(function (item)
        {
            item.element(by.css('h4 a')).getText().then(function (model)
            {
                if (model == product)
                {
                    item.element(by.css('button[class*="btn-info"]')).click();
                }    
            })    
        })
    }

    it('Angular site', function ()
    {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name('name')).sendKeys('XYZ');
        element(by.css('input[name="email"]')).sendKeys("xyz@gmail.com");
        element(by.id('exampleInputPassword1')).sendKeys('password1');
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText('[class="form-control"] option', 'Female')).click();
        element(by.buttonText('Submit')).click().then(function ()
        {
            element(by.css("div[class*='alert-success']")).getText().then(function (text)
            {
                console.log(text);
            })    
        })

        element(by.name('name')).clear();
        element(by.name('name')).sendKeys('M').then(function ()
        {
            element(by.css('div[class="alert alert-danger"]')).getText().then(function (error)
            {
                console.log(error);    
            })    
        })

        element(by.linkText('Shop')).click();
        /*element.all(by.tagName('app-card')).each(function (item)
        {
            item.element(by.css('h4 a')).getText().then(function (model)
            {
                if (model == 'Samsung Note 8')
                {
                    item.element(by.css('button[class*="btn-info"]')).click();
                }    
            })    
        })*/
        selectitem('iphone X');
        selectitem('Samsung Note 8');
        selectitem('Nokia Edge');

        element(by.partialLinkText('Checkout')).getText().then(function (checkoutval)
        {
            var result = checkoutval.split('(');
            expect(result[1].trim().charAt(0)).toBe('3');
            console.log(checkoutval);
        })

    })    
})