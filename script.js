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
    btn.classList.add("add-to-cart");
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

function removeFromCart(productName) {
  const index = cart.findIndex(item => item.name === productName);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;

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

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "حذف";
    removeBtn.classList.add("remove-from-cart");
    removeBtn.addEventListener("click", () => {
      removeFromCart(item.name);
    });

    li.appendChild(removeBtn);
    cartItemsContainer.appendChild(li);

    total += item.price * item.count;
  }

  if (cartSummary) {
    cartSummary.textContent = `تعداد آیتم‌ها: ${cart.length}`;
  }

  cartTotalElement.textContent = total.toLocaleString();
}

function filterProducts(category) {
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  displayProducts(filtered);

  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const clickedBtn = Array.from(buttons).find(btn => btn.innerText === category || (category === 'all' && btn.innerText === 'همه'));
  if (clickedBtn) clickedBtn.classList.add('active');
}
document.addEventListener("DOMContentLoaded", () => {
  filterProducts("all"); // نمایش خودکار همه محصولات هنگام بارگذاری سایت
});

document.addEventListener("DOMContentLoaded", () => {
  const orderBtn = document.getElementById("order-btn");
  if (orderBtn) {
    orderBtn.addEventListener("click", () => {
      const sound = document.getElementById("clickSound");
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }

      setTimeout(() => {
        alert("سفارش شما با موفقیت ثبت شد! 🌼");
      }, 300);
    });
  } else {
    console.warn("دکمه ثبت سفارش پیدا نشد!");
  }
});
// ایجاد عنصر صوتی
const clickSound = new Audio('./sounds/click.wav');

// افزودن رویداد کلیک به دکمه‌ها
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    clickSound.play();
  });
});
