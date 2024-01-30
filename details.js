async function GetData() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const products = response.data;
  console.log(products);

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = products;
  document.querySelector(".title").textContent = title;
  document.querySelector(".description").textContent = description;
  document.querySelector(".price ").textContent = price;
  document.querySelector(".discountPercentage ").textContent =
    discountPercentage;
  document.querySelector(".rating ").textContent = rating;
  document.querySelector(".stock ").textContent = stock;
  document.querySelector(".brand ").textContent = brand;
  document.querySelector(".category ").textContent = category;

  console.log(images);

  const result = images
    .map(function (ele) {
      return `
        <img src="${ele}" class="img_w"/>

        `;
    })
    .join("");

  document.querySelector(".img ").innerHTML = result;
}

GetData();
