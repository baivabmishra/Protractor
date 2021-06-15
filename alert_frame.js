describe('Non angular js website', function ()
{
    it('Open non angular webiste alerts', function ()
    {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id('confirmbtn')).click();
        
        /*//Code for alert
        browser.switchTo().alert().accept().then(function ()
        {
            browser.sleep(5000);    
        })*/
        
        //Code for frame
        /*browser.switchTo().frame('courses-iframe');
        element(by.css("a[class='theme-btn register-btn']")).getText().then(function (text)
        {
            console.log(text);
        })*/
    })    
})