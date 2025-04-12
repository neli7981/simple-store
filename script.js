const products = [
  { id: 1, name: "دفتر کلاسوری", price: 50000, category: "لوازم‌التحریر" },
  { id: 2, name: "ماشین حساب", price: 150000, category: "الکترونیکی" },
  { id: 3, name: "ماگ دانشجویی", price: 70000, category: "اکسسوری" },
  { id: 4, name: "روان‌نویس رنگی", price: 30000, category: "لوازم‌التحریر" },
  { id: 5, name: "فلش مموری 16GB", price: 95000, category: "الکترونیکی" },
  { id: 6, name: "کیف لپ‌تاپ", price: 220000, category: "اکسسوری" }
];

function displayProducts(productsToShow) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  productsToShow.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>قیمت: ${product.price} تومان</p>
      <button onclick="addToCart(${product.id})">افزودن به سبد</button>
    `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  alert(`محصول "${product.name}" به سبد خرید اضافه شد!`);
}

function filterByCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// وقتی صفحه بارگذاری شد، همه محصولات رو نشون بده
window.onload = () => {
  displayProducts(products);

  // دکمه‌های دسته‌بندی رو فعال کن
  document.querySelectorAll(".category-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-category");
      filterByCategory(cat);
    });
  });
};
let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const totalPrice = document.getElementById("cart-total");

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="remove" onclick="removeFromCart(${item.id})">حذف</button>
      ${item.name} × ${item.quantity} = ${item.price * item.quantity} تومان
    `;
    cartList.appendChild(li);
    total += item.price * item.quantity;
  });

  totalPrice.textContent = `مبلغ کل: ${total.toLocaleString()} تومان`;
}
