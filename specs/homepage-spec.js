// import HomePage from '../page_objects/HomePage';
const HomePage = require('../page_objects/HomePage');

browser.waitForAngularEnabled(false);
const homePage = new HomePage();

beforeEach(async () => {
  browser.get(homePage.path);
});

xdescribe('Homepage', () => {
  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('My Store');
  });
  it('Log into your account', () => {
    homePage.signInButtonHeader.click();
    homePage.emailInput.sendKeys('testprotractor@gmail.com');
    homePage.passwordInput.sendKeys('xxxx');
    homePage.logInButton.click();
    //...?
  });
  it('Check categories', () => {
    element(by.linkText('Women')).click();
  });
});
