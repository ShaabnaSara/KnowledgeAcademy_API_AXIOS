async function getProducts() {
  const response = await axios.get(`https://dummyjson.com/products`);
  const products = response.data.products;

  console.log(products);

  const result = products
    .map(function (product) {
      return `
          
          <div class="products"> 
          <div class = "product">
              <h1>${product.title}</h1>
              <img src= "${product.thumbnail}"/>
             <a href= "details.html?id=${product.id}">Details</a>
          </div>
          </div>
       
  
          `;
    })
    .join("");

  document.querySelector(".products").innerHTML += result;
}

getProducts();
