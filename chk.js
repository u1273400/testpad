function testwakirike(){
  var webdriver = require('selenium-webdriver');
  var driver = new webdriver.Builder().forBrowser('chrome').build();

  driver.get('http://www.google.com');

  // var element = driver.findElement(webdriver.By.name('q'));
  // element.sendKeys('Cheese!');
  // element.submit();

  // driver.getTitle().then(function(title) {
  //   console.log('Page title is: ' + title);
  // });

  // driver.wait(function() {
  //   return driver.getTitle().then(function(title) {
  //     return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
  //   });
  // }, 5000);

  // driver.getTitle().then(function(title) {
  //   console.log('Page title is: ' + title);
  // });
  //driver.sleep(1000);
  driver.quit();;
}

testwakirike()
