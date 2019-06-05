class Products {
  async getProducts() {
    try {
      let results = await fetch('../products.json');
      let data = await results.json();
      let products = data.items;
      products = products.map((product) => {
        const { title, price } = product.fields;
        const id = product.sys.id;
        const image = product.fields.image.fields.file.url;
        return { id, title, price, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Products;
