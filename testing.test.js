const{ Builder, Capabilities, By }= require("selenium-webdriver")

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=>{
  await driver.get('http://localhost:5501/index.html')
})

afterAll(async ()=>{
  await driver.quit()
})

test("I can add movies to the page", async()=>{
  let search= await driver.findElement(By.xpath('/html/body/main/section/form/input'))
  await search.sendKeys('UP\n')
  await search.sendKeys('Aladdin\n')
  await search.sendKeys('Lady and the tramp\n')
  await driver.sleep(3000)
})

test("I can cross off the first movie on the page", async()=>{
  let search= await driver.findElement(By.xpath('/html/body/main/ul/li/span'))
  await search.click()
  // await driver.sleep(3000)
})

test("I can delete a movie on the page", async()=>{
  let search= await driver.findElement(By.xpath('/html/body/main/ul/li/button'))
  await search.click()
  // await driver.sleep(3000)
})

test("message when watched on click is correct", async()=>{
  let search= await driver.findElement(By.xpath('/html/body/main/section/form/input'))
  await search.sendKeys('UP\n')
  await driver.sleep(3000)

  let message= await driver.findElement(By.id('message'))

  let filled= await driver.findElement(By.xpath('/html/body/main/ul/li/span'))
  // .getAttribute('innertext')
  await filled.click()
  console.log(message)
  // expect (message).toContain('watched!')

  // expect(.toContain('watched!')

  await driver.sleep(3000)
})