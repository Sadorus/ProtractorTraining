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
    homePage.inputSearchBox.sendKeys(searchResults.noResultsQuery);
    homePage.searchButton.click();
    browser.wait(EC.textToBePresentInElement(searchResults.searchResultsElement, '0 results have been found.'), 5000);
  });

  it('Search for product and check if the first product include query', () => {
    homePage.inputSearchBox.sendKeys(searchResults.searchQuery);
    homePage.searchButton.click();
    browser.wait(EC.presenceOf(searchResults.productGrid), 5000);
    // browser.wait(EC.presenceOf(firstProductName), 5000);
    // browser.wait(EC.textToBePresentInElement(firstProductName, 'Printed Summer Dress'), 5000);
    expect(searchResults.firstProductName.getText()).toContain('Dress');
  });
  it('search suggestions should be present', () => {
    homePage.inputSearchBox.sendKeys(searchResults.searchQuery);
    browser.wait(EC.presenceOf(searchResults.searchSuggestion), 5000);
    searchResults.firstSearchSuggestion.click();
    browser.wait(EC.visibilityOf(searchResults.productMainPicture), 5000);
    expect(searchResults.productHeading.getText()).toContain(searchResults.searchQuery);
  });
});
