const products = [
    {
        name: "Red Green & Yellow Package",
        price: "$150",
        image: "content images/red-green-yellow-package.png",
        link: "red-green-yellow-package-product.html"
    },
    {
        name: "Blue & Pink Package",
        price: "$150",
        image: "content images/blue-pink-package.png",
        link: "blue-pink-package-product.html"
    },
    {
        name: "Classic Combo Slide Package",
        price: "$260",
        image: "content images/classic-combo-slide-package.png",
        link: "classic-combo-slide-package-product.html"
    },
    {
        name: "Pink Castle Combo Slide Package",
        price: "$260",
        image: "content images/pink-castle-combo-slide-package.png",
        link: "pink-castle-combo-slide-package-product.html"
    },
    {
        name: "Tropical Sun Combo Slide Package",
        price: "$260",
        image: "content images/tropical-sun-combo-slide-package.png",
        link: "tropical-sun-combo-slide-package-product.html"
    },
    
    // ... add more products as needed
    {
        name: "Blue Green & Yellow Package",
        price: "$180",
        image: "content images/blue-green-yellow-package.png",
        link: "blue-green-yellow-package-product.html"
    },
    {
        name: "Balloons Package",
        price: "$180",
        image: "content images/balloons-package.png",
        link: "balloons-package-product.html"
    },
    {
        name: "Pink Package",
        price: "$180",
        image: "content images/pink-package.png",
        link: "pink-package-product.html"
    },
    {
        name: "Tropical Sun Package",
        price: "$180",
        image: "content images/tropical-sun-package.png",
        link: "tropical-sun-package-product.html"
    },
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