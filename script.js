const products = [
  { id: 1, name: "دفتر کلاسوری", price: 50000, category: "لوازم التحریر" },
  { id: 2, name: "ماشین حساب", price: 70000, category: "الکترونیکی" },
  { id: 3, name: "ماگ دانشجویی", price: 60000, category: "اکسسوری" },
  { id: 4, name: "روان نویس رنگی", price: 30000, category: "لوازم التحریر" },
  { id: 5, name: "فلش 32 گیگ", price: 120000, category: "الکترونیکی" },
  { id: 6, name: "کیف لپ تاپ", price: 250000, category: "اکسسوری" }
];

let cart = [];

function displayProducts(category = "all") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>قیمت: ${product.price.toLocaleString()} تومان</p>
      <button onclick="addToCart(${product.id})">افزودن به سبد خرید</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartSummary();
  updateCartTotal();
  renderCartItems();
}

function updateCartSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-summary").textContent = `${totalItems} آیتم در سبد خرید`;
}

function updateCartTotal() {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cart-total").textContent = `مجموع: ${totalPrice.toLocaleString()} تومان`;
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  cart.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.name} × ${item.quantity}`;
    container.appendChild(p);
  });
}

function filterByCategory(category) {
  displayProducts(category);
}

// نمایش اولیه همه محصولات
displayProducts();


