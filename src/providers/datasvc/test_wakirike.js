function sum(a, b) {
  return a + b;
}
module.exports = sum;

function testwakirike(){
  require('C:/Users/u1273400/apps/node/node_modules/chromedriver/lib/chromedriver');
  var webdriver = require('C:/Users/u1273400/apps/node/node_modules/selenium/bin/selenium');
  var driver = new webdriver.Builder().forBrowser('chrome').build();

  driver.get('http://www.google.com');

  var element = driver.findElement(webdriver.By.name('q'));
  element.sendKeys('Cheese!');
  element.submit();

  driver.getTitle().then(function(title) {
    console.log('Page title is: ' + title);
  });

  driver.wait(function() {
    return driver.getTitle().then(function(title) {
      return title.toLowerCase().lastIndexOf('cheese!', 0) === 0;
    });
  }, 3000);

  driver.getTitle().then(function(title) {
    console.log('Page title is: ' + title);
  });

  driver.quit();
}
module.exports = testwakirike;

