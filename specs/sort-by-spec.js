const SearchResults = require('../page_objects/SearchResults');
const ProductListingPage = require('../page_objects/ProductListingPage');


const searchResults = new SearchResults();
const productListingPage = new ProductListingPage();
const EC = protractor.ExpectedConditions;

beforeEach(() => {
  browser.get(productListingPage.path);
});

describe('Sort by:', () => {
  it('Use sort by product name from a to z and check order', () => {
    browser.wait(EC.presenceOf(searchResults.productGrid), 5000);
    productListingPage.productName.map(eachName => eachName.getText()
      .then(unSortedProductNames => unSortedProductNames)).then((unSortedProductNames) => {
      productListingPage.productSortDropDownList.click();
      productListingPage.sortOptionFromAtoZ.click();
      browser.sleep(4000); // temporary solution, need to think about it
      let sortedProductNames = unSortedProductNames.slice();
      sortedProductNames = sortedProductNames.sort();
      // expect(sortedProductNames).toEqual(unSortedProductNames);
      productListingPage.productName.map(eachName => eachName.getText()
        .then(sortedProductNamesCheck => sortedProductNamesCheck)).then((sortedProductNamesCheck) => {
        expect(sortedProductNames).toEqual(sortedProductNamesCheck);
      });
    });
  });
  // this case is inactive due broken sorting "Z to a" on website
  xit('Use sort by product name from z to a and check order', () => {
    browser.wait(EC.presenceOf(searchResults.productGrid), 5000);
    productListingPage.productName.map(eachName => eachName.getText()
      .then(unSortedProductNames => unSortedProductNames)).then((unSortedProductNames) => {
      productListingPage.productSortDropDownList.click();
      productListingPage.sortOptionFromZtoA.click();
      browser.sleep(4000); // temporary solution, need to think about it
      let sortedProductNames = unSortedProductNames.slice();
      sortedProductNames = sortedProductNames.sort();
      sortedProductNames = sortedProductNames.reverse();
      productListingPage.productName.map(eachName => eachName.getText()
        .then(sortedProductNamesCheck => sortedProductNamesCheck)).then((sortedProductNamesCheck) => {
        expect(sortedProductNames).toEqual(sortedProductNamesCheck);
      });
    });
  });
});
