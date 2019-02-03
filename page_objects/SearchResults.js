module.exports = class SearchResults {
  constructor() {
    this.searchResultsElement = element(by.css('.heading-counter'));
    this.productGrid = element(by.css('.product_list'));
    this.firstProductName = element(by.css('.product_list')).all(by.css('.product-name')).first();
  }
};
