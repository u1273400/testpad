
function testwakirike(){
  var webdriver = require('selenium-webdriver');
  var driver = new webdriver.Builder().forBrowser('chrome').build(),
      until = webdriver.until;


  //element.submit();

  // driver.getTitle().then(function(title) {
  //   console.log('Page title is: ' + title);
  // }).catch();
  //driver.sleep(1000);
  driver.get('http://www.google.com').then(function(){
    var element = driver.findElement(webdriver.By.name('q'));
    element.sendKeys('Cheese!');
    //driver.findElement(webdriver.By.xpath('//*[@id="tsf"]/div[2]/div[3]/center/input[1]')).click();
    driver.findElement(webdriver.By.name('btnK')).click();
    driver.sleep(4000);
    driver.wait(testAfterwait,15000).catch(function(e){return false;});

  }).catch(function(e){return false;});

  function testAfterwait() {
    //until(.titleIs'')
    return driver.getTitle().then(function(title) {
      console.log('Page title is: ' + title);//.toLowerCase().lastIndexOf('cheese!', 0) )
      return true;
    }).catch(function(e){return false;})

  }

}
//module.exports = testwakirike;

function sum(a, b) {
  return a + b;
}
module.exports = testwakirike;


