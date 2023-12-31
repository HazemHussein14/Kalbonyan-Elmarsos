const productListEl = document.getElementById("product-list");

// const renderedProducts = [];

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement("li");
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;
  const prodDeleteButtonEl = document.createElement("button");
  prodDeleteButtonEl.textContent = "DELETE";

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    "click",
    deleteProductFn.bind(null, prodId)
  );

  newListEl.appendChild(prodDeleteButtonEl);
  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = "";
  const startTime = performance.now();
  // products.forEach((product) => {
  //   const newListEl = createElement(product, product.id, deleteProductFn);
  //   productListEl.appendChild(newListEl);
  // });
  for (let i = 0; i < products.length; i++) {
    const newListEl = createElement(
      products[i],
      products[i].id,
      deleteProductFn
    );
    productListEl.appendChild(newListEl);
  }
  const EndTime = performance.now();
  console.log(EndTime - startTime);
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement("afterbegin", newProductEl);
    // renderedProducts.push(newProductEl);
    // console.log(renderedProducts);
  } else {  
    const productEl = document.getElementById(prodId);
    productEl.remove();
  }
}
