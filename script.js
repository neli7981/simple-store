const products = [
  { id: 1, name: 'کتاب برنامه‌نویسی', price: 120000, image: 'https://via.placeholder.com/200x150' },
  { id: 2, name: 'ماگ دانشگاهی', price: 85000, image: 'https://via.placeholder.com/200x150' },
  { id: 3, name: 'فلش 16 گیگ', price: 150000, image: 'https://via.placeholder.com/200x150' }
];

let cart = [];

const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart-items');
const totalEl = document.getElementById('total');

function renderProducts() {
  products.forEach(product => {
    const el = document.createElement('div');
    el.classList.add('product');
    el.innerHTML = 
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price.toLocaleString()} تومان</p>
      <button onclick="addToCart(${product.id})">افزودن به سبد</button>
    ;
    productsContainer.appendChild(el);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = item.name + ' - ' + item.price.toLocaleString() + ' تومان';
    cartContainer.appendChild(li);
  });
  totalEl.textContent = total.toLocaleString();
}

function showCart() {
  document.getElementById('cart').classList.toggle('hidden');
}

function checkout() {
  alert('سفارش شما ثبت شد! (شبیه‌سازی)');
  cart = [];
  updateCart();
  showCart();
}

renderProducts();
﻿