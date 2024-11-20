const products = [
    {
        id: 201,
        name: "Blue & Pink Small Jumper",
        price: "$220",
        image: "Product images/minijumperpink.png",
        link: "201-product-info.html"
    },
    {
        id: 202,
        name: "Blue & Pink Small Jumper",
        price: "$220",
        image: "Product images/minijumper.png",
        link: "202-product-info.html"
    },
    {
        id: 203,
        name: "Blue & Pink Small Jumper",
        price: "$220",
        image: "Product images/minijumperpink.png",
        link: "203-product-info.html"
    },
    {
        id: 204,
        name: "Blue & Pink Small Jumper",
        price: "$220",
        image: "Product images/minijumper.png",
        link: "204-product-info.html"
    },
    {
        id: 205,
        name: "Blue & Pink Small Jumper",
        price: "$220",
        image: "Product images/minijumperpink.png",
        link: "205-product-info.html"
    },
    {
        id: 101,
        name: "Red Green & Yellow Small Jumper",
        price: "$100",
        image: "Product images/minijumper.png",
        link: "101-product-info.html"
    },
    {
        id: 102,
        name: "Blue & Pink Small Jumper",
        price: "$100",
        image: "Product images/minijumperpink.png",
        link: "102-product-info.html"
    },
    // ... add more products as needed
    {
        id: 103,
        name: "Blue Green & Yellow Jumper",
        price: "$130",
        image: "Product images/minijumper.png",
        link: "103-product-info.html"
    },
    {
        id: 104,
        name: "Balloons Jumper",
        price: "$130",
        image: "Product images/minijumperpink.png",
        link: "104-product-info.html"
    },
    {
        id: 105,
        name: "Pink Jumper",
        price: "$130",
        image: "Product images/minijumper.png",
        link: "105-product-info.html"
    },
    {
        id: 106,
        name: "Blue & Pink Small Jumper",
        price: "$130",
        image: "Product images/minijumperpink.png",
        link: "106-product-info.html"
    },
    {
        id: 107,
        name: "Blue & Pink Small Jumper",
        price: "$130",
        image: "Product images/minijumper.png",
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