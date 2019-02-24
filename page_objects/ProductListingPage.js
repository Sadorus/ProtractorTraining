module.exports = class ProductListingPage {
  constructor() {
    this.path = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.productSortDropDownList = element(by.id('uniform-selectProductSort'));
    this.sortOptionFromAtoZ = element(by.cssContainingText('option', 'Product Name: A to Z'));
    this.sortOptionFromZtoA = element(by.cssContainingText('option', 'Product Name: Z to A'));
    this.sortOptionLowestPrice = element(by.cssContainingText('option', 'Price: Lowest first'));
    this.productName = element(by.css('.product_list')).all(by.css('.product-name'));
    this.productPrice = element(by.css('.product_list')).all(by.css('.right-block .price.product-price'));
    this.firstproductPrice = element(by.css('.product_list')).all(by.css('.price')).get(1).getText();
    // this.pricePrice = element(by.css('.product_list')).all(by.css('.right-block .price.product-price')).get(0);
  }
};
