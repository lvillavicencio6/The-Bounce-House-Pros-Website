const products = [
    {
        name: "White Folding Chair",
        price: "$1.50",
        image: "content images/white-folding-chair.png",
        link: "red-green-yellow-package-product.html"
    },
    {
        name: "6ft Rectangular Table",
        price: "$8",
        image: "content images/6ft-rectangular-table.png",
        link: "blue-pink-package-product.html"
    },
    {
        name: "Kids Folding Chair",
        price: "$1.50",
        image: "content images/kids-folding-chair.png",
        link: "classic-combo-slide-package-product.html"
    },
    {
        name: "Kids Rectangular Table",
        price: "$8",
        image: "content images/kids-rectangular-table.png",
        link: "pink-castle-combo-slide-package-product.html"
    },
    {
        name: "60 Inch Round Table",
        price: "$12",
        image: "content images/60-inch-round-table.png",
        link: "tropical-sun-combo-slide-package-product.html"
    },
    
    // ... add more products as needed
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" class="cta-button">View Product</a>
    `;
    productGrid.appendChild(productCard);
});