const products = [
    {
        name: "White Folding Chair",
        price: "$1.50",
        image: "content images/white-folding-chair.png",
        link: "white-folding-chair-product.html"
    },
    {
        name: "6ft Rectangular Table",
        price: "$8",
        image: "content images/6ft-rectangular-table.png",
        link: "6ft-rectangular-table-product.html"
    },
    {
        name: "Kids Folding Chair",
        price: "$1.50",
        image: "content images/kids-folding-chair.png",
        link: "kids-folding-chair.html"
    },
    {
        name: "Kids Rectangular Table",
        price: "$8",
        image: "content images/kids-rectangular-table.png",
        link: "kids-rectangular-table.html"
    },
    {
        name: "60 Inch Round Table",
        price: "$12",
        image: "content images/60-inch-round-table.png",
        link: "60-inch-round-table.html"
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