function sum(a, b) {
  return a + b;
}
module.exports = sum;

function testwakirike(){
  require('C:/Users/u1273400/apps/node/node_modules/chromedriver/lib/chromedriver');
  var webdriver = require('selenium-webdriver');
  var driver = new webdriver.Builder().forBrowser('chrome').build();

  driver.get('http://www.google.com');

  //element.submit();

  // driver.getTitle().then(function(title) {
  //   console.log('Page title is: ' + title);
  // }).catch();

  driver.wait(testAfterwait,15000);

  function testAfterwait() {
    var element = driver.findElement(webdriver.By.name('q'));
    element.sendKeys('Cheese!');
    driver.findElement(webdriver.By.xpath('//*[@id="tsf"]/div[2]/div[3]/center/input[1]')).click();
    return driver.getTitle().then(function(title) {
      console.log('Page title is: ' + title);//.toLowerCase().lastIndexOf('cheese!', 0) );
      return true;
    }).catch(function(e){return false;});
  }

  // driver.getTitle().then(function(title) {
  //   console.log('Page title is: ' + title);
  // }).catch();

  driver.quit();
}
module.exports = testwakirike;

