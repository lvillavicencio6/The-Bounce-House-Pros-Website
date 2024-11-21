const products = [
    {
        id: 201,
        name: "Classic Combo Slide Jumper",
        price: "$220",
        image: "content images/classic-combo-slide-jumper.png",
        link: "201-product-info.html"
    },
    {
        id: 202,
        name: "Pink Castle Combo Slide Jumper",
        price: "$220",
        image: "content images/pink-castle-combo-slide.png",
        link: "202-product-info.html"
    },
    {
        id: 203,
        name: "Tropical Sun Combo Slide Jumper",
        price: "$220",
        image: "content images/tropical-sun-combo-slide.png",
        link: "203-product-info.html"
    },
    {
        id: 204,
        name: "Pink Combo Slide Jumper",
        price: "$220",
        image: "content images/pink-combo-slide.png",
        link: "204-product-info.html"
    },
    {
        id: 205,
        name: "Tropical Combo Slide Jumper",
        price: "$220",
        image: "content images/tropical-combo-slide.png",
        link: "205-product-info.html"
    },
    {
        id: 101,
        name: "Red Green & Yellow Small Jumper",
        price: "$100",
        image: "content images/red-green-yellow-small-jumper.png",
        link: "101-product-info.html"
    },
    {
        id: 102,
        name: "Blue & Pink Small Jumper",
        price: "$100",
        image: "content images/blue-pink-small-jumper.png",
        link: "102-product-info.html"
    },
    // ... add more products as needed
    {
        id: 103,
        name: "Blue Green & Yellow Jumper",
        price: "$130",
        image: "content images/blue-green-yellow-jumper.png",
        link: "103-product-info.html"
    },
    {
        id: 104,
        name: "Balloons Jumper",
        price: "$130",
        image: "content images/balloons-jumper.png",
        link: "104-product-info.html"
    },
    {
        id: 105,
        name: "Pink Jumper",
        price: "$130",
        image: "content images/pink-jumper.png",
        link: "105-product-info.html"
    },
    {
        id: 106,
        name: "Pink Castle Jumper",
        price: "$130",
        image: "content images/pink-castle-jumper.png",
        link: "106-product-info.html"
    },
    {
        id: 107,
        name: "Tropical Sun Jumper",
        price: "$130",
        image: "content images/tropical-sun-jumper-front.png",
        link: "107-product-info.html"
    },
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.id} - ${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" class="cta-button">View Product</a>
    `;
    productGrid.appendChild(productCard);
});