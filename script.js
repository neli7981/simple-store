const products = [
  { name: "کتاب برنامه‌نویسی", price: "150,000 تومان", category: "کتاب" },
  { name: "دفترچه یادداشت", price: "50,000 تومان", category: "لوازم" },
  { name: "خودکار رنگی", price: "20,000 تومان", category: "لوازم" },
  { name: "کتاب طراحی وب", price: "180,000 تومان", category: "کتاب" }
];

const productList = document.getElementById("product-list");

function displayProducts(category) {
  productList.innerHTML = "";

  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <p class="category-label">${p.category}</p>
    `;
    productList.appendChild(card);
  });
}

document.querySelectorAll(".category").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-category");
    displayProducts(cat);
  });
});

// نمایش همه‌ی محصولات به صورت پیش‌فرض
displayProducts("all");
function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = product.price + " تومان";

    // ✅ اضافه کردن دکمه سبد خرید
    const addButton = document.createElement("button");
    addButton.textContent = "افزودن به سبد خرید";
    addButton.addEventListener("click", () => {
      addToCart(product.price);
    });

    productCard.appendChild(name);
    productCard.appendChild(price);
    productCard.appendChild(addButton); // اینجا اضافه می‌کنیم
    productList.appendChild(productCard);
  });
}
let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
  cartCount++;
  cartTotal += price;

  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-total").textContent = cartTotal.toLocaleString() + " تومان";
}

