const products = [
  {
    id: 1,
    name: "ماشین حساب",
    price: 250000,
    category: "الکترونیکی",
    image: "img/ماشین حساب.jpg"
  },
  {
    id: 2,
    name: "ماگ طرح فضانورد",
    price: 120000,
    category: "اکسسوری",
    image: "img/ماگ.jpg"
  },
  {
    id: 3,
    name: "دفتر کلاسوری",
    price: 80000,
    category: "لوازم تحریر",
    image: "img/دفتر کلاسوری.jpg"
  },
  {
    id: 4,
    name: "فلش مموری 32GB",
    price: 150000,
    category: "الکترونیکی",
    image: "img/فلش 32.jpg"
  },
  {
    id: 5,
    name: "روان نویس رنگی",
    price: 200000,
    category: "لوازم تحریر",
    image: "img/روان نویس رنگی.jpg"
  },
  {
    id: 6,
    name: "کیف لپ تاپ",
    price: 320000,
    category: "اکسسوری",
    image: "img/کیف.jpg"
  }
];

const cart = [];

function displayProducts(productArray) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  productArray.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.classList.add("product-image");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `${product.price.toLocaleString()} تومان`;

    const btn = document.createElement("button");
    btn.textContent = "افزودن به سبد خرید";
    btn.addEventListener("click", () => addToCart(product));

    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(btn);

    productList.appendChild(productDiv);
  });
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartSummary = document.getElementById("cart-summary");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name + " - " + item.price.toLocaleString() + " تومان";
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toLocaleString();
  cartSummary.textContent = cart.length;
}

function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

// نمایش اولیه همه محصولات
displayProducts(products);
