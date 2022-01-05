const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const jsdom = require('jsdom')

describe('Factorial Test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Factorial of 0', async function() {
    await driver.get("https://qainterview.pythonanywhere.com/")
    await driver.findElement(By.id("number")).click()
    await driver.findElement(By.id("number")).sendKeys("0")
    await driver.findElement(By.id("getFactorial")).click()
    var text = driver.findElement(By.id("resultDiv")).getText();
    console.log(text)
    setTimeout(() => {console.log(text)}, 5000);
    
  })
  // it('Factorial of 1', async function() {
  //   await driver.get("https://qainterview.pythonanywhere.com/")
  //   await driver.findElement(By.id("number")).click()
  //   await driver.findElement(By.id("number")).sendKeys("1")
  //   await driver.findElement(By.id("getFactorial")).click()
  // })
  // it('Factorial of 122', async function() {
  //   await driver.get("https://qainterview.pythonanywhere.com/")
  //   await driver.findElement(By.id("number")).click()
  //   await driver.findElement(By.id("number")).sendKeys("122")
  //   await driver.findElement(By.id("getFactorial")).click()
  // })
  // it('Factorial of -89', async function() {
  //   await driver.get("https://qainterview.pythonanywhere.com/")
  //   await driver.findElement(By.id("number")).click()
  //   await driver.findElement(By.id("number")).sendKeys("-89")
  //   await driver.findElement(By.id("getFactorial")).click()
  // })
  // it('Factorial of 888', async function() {
  //   await driver.get("https://qainterview.pythonanywhere.com/")
  //   await driver.findElement(By.id("number")).click()
  //   await driver.findElement(By.id("number")).sendKeys("888")
  //   await driver.findElement(By.id("getFactorial")).click()
  // })
  // it('Factorial of 999', async function() {
  //   await driver.get("https://qainterview.pythonanywhere.com/")
  //   await driver.findElement(By.id("number")).click()
  //   await driver.findElement(By.id("number")).sendKeys("0")
  //   await driver.findElement(By.id("getFactorial")).click()
  // })
})
