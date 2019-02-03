module.exports = class HomePage {
  constructor() {
    this.path = 'http://automationpractice.com/index.php';
    this.searchQuery = element(by.css('.search_query'));
    this.searchButton = element(by.name('submit_search'));
    this.signInButtonHeader = element(by.css('.header_user_info'));
    this.emailInput = element(by.id('email'));
    this.passwordInput = element(by.id('passwd'));
    this.logInButton = element(by.id('SubmitLogin'));
  }
};
