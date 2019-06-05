class UI {
  displayProducts(products) {
    let output = '';

    products.forEach((product) => {
      output += `
        <article class="product">
        <div class="img-container">
            <img src="${product.image}" alt="${
        product.title
      }" class="product-img">
            <button class="bag-btn" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i>
                add to bag
            </button>
        </div>
        <h3>${product.title}</h3>
        <h4>$${product.price}</h4>
    </article>
        `;
    });
    const productsDOM = document.querySelector('.products-center');
    productsDOM.innerHTML = output;
  }
}

export default UI;
