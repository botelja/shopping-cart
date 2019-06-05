class Products {
  async getProducts() {
    try {
      let results = await fetch('../products.json');
      let data = await results.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Products;
