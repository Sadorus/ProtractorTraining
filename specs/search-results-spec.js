const SearchResults = require('../page_objects/SearchResults');
const HomePage = require('../page_objects/HomePage');

const searchResults = new SearchResults();
const homePage = new HomePage();
// browser.waitForAngularEnabled(false);
const EC = protractor.ExpectedConditions;

beforeEach(() => {
  browser.get(homePage.path);
});

describe('Search Results', () => {
  it('Search for a not existing product', () => {
    homePage.searchQuery.sendKeys('d');
    homePage.searchButton.click();
    browser.wait(EC.textToBePresentInElement(searchResults.searchResultsElement, '0 results have been found.'), 5000);
  });

  it('Search for product and check if the first product include query', () => {
    homePage.searchQuery.sendKeys('dress');
    homePage.searchButton.click();
    browser.wait(EC.presenceOf(searchResults.productGrid), 5000);
    // browser.wait(EC.presenceOf(firstProductName), 5000);
    // browser.wait(EC.textToBePresentInElement(firstProductName, 'Printed Summer Dress'), 5000);
    expect(searchResults.firstProductName.getText()).toContain('Dress');
  });
});
