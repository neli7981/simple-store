const products = [
  {
    name: "ماشین حساب فانتزی",
    price: 200000,
    image: "./img/ماشین حساب.jpg",
    category: "الکترونیکی",
  },
  {
    name: "ماگ طرح فضانورد",
    price: 150000,
    image: "./img/ماگ.jpg",
    category: "اکسسوری",
  },
  {
    name: "دفتر کلاسوری",
    price: 100000,
    image: "./img/دفتر کلاسوری.jpg",
    category: "لوازم تحریر",
  },
  {
    name: "فلش 32 گیگ",
    price: 200000,
    image: "./img/فلش 32.jpg",
    category: "الکترونیکی",
  },
  {
    name: "روان نویس رنگی",
    price: 40000,
    image: "./img/روان نویس رنگی.jpg",
    category: "لوازم تحریر",
  },
  {
    name: "کیف لپ‌تاپ",
    price: 250000,
    image: "./img/کیف.jpg",
    category: "اکسسوری",
  },
];

const productList = document.getElementById("product-list");
const cartSummary = document.getElementById("cart-summary");
const cartTotal = document.getElementById("cart-total");

let cart = [];

function displayProducts(productsToShow) {
  productList.innerHTML = "";

  productsToShow.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    // استایل دستی عکس
    img.style.width = "100%";
    img.style.height = "180px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.display = "block";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `قیمت: ${product.price.toLocaleString()} تومان`;

    const btn = document.createElement("button");
    btn.textContent = "افزودن به سبد خرید";
    btn.addEventListener("click", () => addToCart(product));

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(btn);

    productList.appendChild(card);
  });
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartSummary.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.name;
    cartSummary.appendChild(p);
    total += item.price;
  });

  cartTotal.textContent = `مبلغ کل: ${total.toLocaleString()} تومان`;
}

function filterCategory(category) {
  if (category === "همه") {
    displayProducts(products);
  } else {
    const filtered = products.filter((p) => p.category === category);
    displayProducts(filtered);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
