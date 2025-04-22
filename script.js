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
    const addToCartBtn = document.createElement("button");
addToCartBtn.innerText = "افزودن به سبد خرید";
addToCartBtn.classList.add("add-to-cart"); // اضافه کردن کلاس به دکمه
addToCartBtn.addEventListener("click", () => {
  addToCart(product);
});
productCard.appendChild(addToCartBtn);

const removeBtn = document.createElement("button");
removeBtn.innerText = "حذف";
removeBtn.classList.add("remove-from-cart"); // اضافه کردن کلاس به دکمه حذف
removeBtn.addEventListener("click", () => {
  removeFromCart(index);
});
cartItem.appendChild(removeBtn);



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
  // فیلتر کردن کالاها
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  displayProducts(filtered);

  // پاک کردن حالت active از همه دکمه‌ها
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // اضافه کردن active به دکمه کلیک شده
  const clickedBtn = Array.from(buttons).find(btn => btn.innerText === category || (category === 'all' && btn.innerText === 'همه'));
  if (clickedBtn) clickedBtn.classList.add('active');
}
document.addEventListener("DOMContentLoaded", () => {
  filterProducts("all"); // نمایش خودکار همه محصولات هنگام بارگذاری سایت
});
