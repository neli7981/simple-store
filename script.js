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
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  // گروهبندی آیتم‌های مشابه
  const groupedCart = {};
  cart.forEach((item) => {
    if (groupedCart[item.name]) {
      groupedCart[item.name].count += 1;
    } else {
      groupedCart[item.name] = { ...item, count: 1 };
    }
  });

  for (let key in groupedCart) {
    const item = groupedCart[key];

    const li = document.createElement("li");
    li.textContent = `${item.name} ×${item.count} - ${item.price * item.count} تومان`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "حذف";
    removeButton.addEventListener("click", () => {
      removeFromCart(item.name);
    });

    li.appendChild(removeButton);
    cartItemsContainer.appendChild(li);

    total += item.price * item.count;
  }

  // آپدیت تعداد آیتم‌ها در cart-summary
  const cartSummary = document.getElementById("cart-summary");
  if (cartSummary) {
    cartSummary.textContent = `تعداد آیتم‌ها: ${cart.length}`;
  }

  cartTotalElement.textContent = total;
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(product => product.category === category);
    displayProducts(filtered);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
function removeFromCart(productName) {
  const index = cart.findIndex((item) => item.name === productName);
  if (index !== -1) {
    cart.splice(index, 1); // حذف کالا از آرایه
    updateCart(); // آپدیت سبد خرید بعد از حذف
  }
}
