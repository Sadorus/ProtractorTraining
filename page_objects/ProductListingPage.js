module.exports = class ProductListingPage {
  constructor() {
    this.path = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.productSortDropDownList = element(by.id('uniform-selectProductSort'));
    this.sortOptionFromAtoZ = element(by.cssContainingText('option', 'Product Name: A to Z'));
    this.sortOptionFromZtoA = element(by.cssContainingText('option', 'Product Name: Z to A'));
    this.productName = element(by.css('.product_list')).all(by.css('.product-name'));
  }
};
