class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
}

export default Storage;
