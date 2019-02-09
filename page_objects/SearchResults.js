module.exports = class SearchResults {
  constructor() {
    this.searchResultsElement = element(by.css('.heading-counter'));
    this.productGrid = element(by.css('.product_list'));
    this.firstProductName = element(by.css('.product_list')).all(by.css('.product-name')).first();
    this.searchSuggestion = element(by.css('.ac_results'));
    this.firstSearchSuggestion = element.all(by.css('.ac_even')).first();
    this.productHeading = element(by.css('h1'));
    this.productMainPicture = element(by.id('bigpic'));
    this.searchQuery = 'Dress';
    this.noResultsQuery = 'zzzzz###';
  }
};
