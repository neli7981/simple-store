const products = [
  { id: 1, name: "دفتر کلاسوری", price: 50000, category: "لوازم‌التحریر" },
  { id: 2, name: "ماشین حساب", price: 150000, category: "الکترونیکی" },
  { id: 3, name: "ماگ دانشجویی", price: 70000, category: "اکسسوری" },
];

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
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
  alert(`محصول با شناسه ${productId} به سبد خرید اضافه شد!`);
}

displayProducts(products);
