describe('angularjs homepage', function()
{
    it('should add a testcase', function()
    {
        browser.get('https://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/').then(function()
        {
            browser.sleep(9000).then(function ()
            {
                console.log('I am the last step to be executed!');
            })
        });    
    });
}); 