const products = [
  { id: 1, name: 'کتاب طراحی وب', price: 120000, category: 'کتاب', image: 'https://picsum.photos/200/140?random=1' },
  { id: 2, name: 'دفتر کلاسوری', price: 45000, category: 'لوازم', image: 'https://picsum.photos/200/140?random=2' },
  { id: 3, name: 'تی‌شرت دانشجویی', price: 95000, category: 'پوشاک', image: 'https://picsum.photos/200/140?random=3' },
  { id: 4, name: 'کوله پشتی لپ‌تاپ', price: 320000, category: 'لوازم', image: 'https://picsum.photos/200/140?random=4' },
  { id: 5, name: 'کتاب زبان تخصصی', price: 99000, category: 'کتاب', image: 'https://picsum.photos/200/140?random=5' },
  { id: 6, name: 'هودی پاییزی', price: 170000, category: 'پوشاک', image: 'https://picsum.photos/200/140?random=6' }
];

const container = document.getElementById('product-container');
const filter = document.getElementById('categoryFilter');

function renderProducts(list) {
  container.innerHTML = '';
  list.forEach(product => {
    container.innerHTML += 
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price.toLocaleString()} تومان</p>
        <button>افزودن به سبد</button>
      </div>
    ;
  });
}

filter.addEventListener('change', () => {
  const selected = filter.value;
  if (selected === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === selected);
    renderProducts(filtered);
  }
});

renderProducts(products);
Force update to trigger Vercel
