var products = [
  {
    id: 1,
    name: "Smartphone",
    description: "A high-end smartphone with a great camera",
    price: 699.99,
    category: "Electronics",
    inStock: true,
    imageUrl: "img/smartphone-with-gradient-wallpaper_23-2147846500.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    description: "A powerful laptop for professionals",
    price: 1299.99,
    category: "Electronics",
    inStock: false,
    imageUrl: "img/laptop-black-background-mock-up-design_1135-80.avif"
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Brews excellent coffee in minutes",
    price: 49.99,
    category: "Home Appliances",
    inStock: true,
    imageUrl: "img/close-up-hand-with-coffee-machine_23-2148892898.jpg"
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 199.99,
    category: "Audio",
    inStock: true,
    imageUrl: "img/handphone.jpg"
  },
  {
    id: 5,
    name: "Sneakers",
    description: "Comfortable running shoes",
    price: 89.99,
    category: "Footwear",
    inStock: true,
    imageUrl: "img/shoes-sale-social-media-post-template-design_505751-4476.jpg"
  },
  {
    id: 6,
    name: "Smartwatch",
    description: "A smartwatch with various health tracking features",
    price: 199.99,
    category: "Wearables",
    inStock: true,
    imageUrl: "img/snartwatch.jpg"
  },
  {
    id: 7,
    name: "Tablet",
    description: "A high-resolution display tablet",
    price: 329.99,
    category: "Electronics",
    inStock: false,
    imageUrl: "img/tablat.avif"
  },
  {
    id: 8,
    name: "Gaming Console",
    description: "The latest gaming console with advanced graphics",
    price: 499.99,
    category: "Gaming",
    inStock: true,
    imageUrl: "img/gaming.avif"
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with high-quality sound",
    price: 59.99,
    category: "Audio",
    inStock: true,
    imageUrl: "img/bluethooth.jpg"
  },
  {
    id: 10,
    name: "Smart TV",
    description: "A 55-inch smart TV with 4K resolution",
    price: 799.99,
    category: "Electronics",
    inStock: false,
    imageUrl: "img/tv.avif"
  },
  {
    id: 11,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with long battery life",
    price: 29.99,
    category: "Accessories",
    inStock: true,
    imageUrl: "img/mo.avif"
  },
  {
    id: 12,
    name: "Keyboard",
    description: "Mechanical keyboard with customizable keys",
    price: 89.99,
    category: "Accessories",
    inStock: true,
    imageUrl: "img/key.avif"
  },
  {
    id: 13,
    name: "Camera",
    description: "Digital camera with 20MP resolution",
    price: 499.99,
    category: "Electronics",
    inStock: false,
    imageUrl: "img/camra.jpg"
  },
  {
    id: 14,
    name: "Fitness Tracker",
    description: "Fitness tracker with heart rate monitor",
    price: 79.99,
    category: "Wearables",
    inStock: true,
    imageUrl: "img/fitness.jpg"
  },
  {
    id: 15,
    name: "Air Purifier",
    description: "HEPA air purifier for clean indoor air",
    price: 129.99,
    category: "Home Appliances",
    inStock: true,
    imageUrl: "img/air.jpg"
  },
  {
    id: 16,
    name: "Blender",
    description: "High-power blender for smoothies and shakes",
    price: 59.99,
    category: "Home Appliances",
    inStock: false,
    imageUrl: "img/bil.avif"
  },
  {
    id: 17,
    name: "Electric Kettle",
    description: "Stainless steel electric kettle with auto shut-off",
    price: 39.99,
    category: "Kitchen Appliances",
    inStock: true,
    imageUrl: "img/catle.jpg"
  },
  {
    id: 18,
    name: "Desk Lamp",
    description: "LED desk lamp with adjustable brightness",
    price: 24.99,
    category: "Home Office",
    inStock: true,
    imageUrl: "img/lamp.jpg"
  },
  {
    id: 19,
    name: "Water Bottle",
    description: "Insulated stainless steel water bottle",
    price: 19.99,
    category: "Outdoor",
    inStock: true,
    imageUrl: "img/bottale.avif"
  },
  {
    id: 20,
    name: "Backpack",
    description: "Durable backpack with multiple compartments",
    price: 49.99,
    category: "Accessories",
    inStock: true,
    imageUrl: "img/back.jpg"
  },
  {
    id : 21 ,
    name: "3D Printer",
    title: "Industrial 3D Printer",
    description: "An industrial-grade 3D printer for rapid prototyping and production.",
    price: 15000,
    category: "Additive Manufacturing",
    imageUrl: "img/3 d.jpg"
},
];

// Function to display products
function displayProducts(products) {
  var productContainer = document.getElementById("product");
  productContainer.innerHTML = "";
  products.forEach((data, index) => {
    productContainer.innerHTML += `<div class="card">
      <div class="card-inner">
        <img id="imges" src="${data.imageUrl}" alt="Image 1">
        <div class="card-overlay">
            <h2>${data.name}</h2>
            <p >${data.description}</p>
            <p>$${data.price}</p>
            <p>${data.category}</p>
        </div>
      </div>
    </div>`;
  });
}
function filterProducts(){
var category = document.getElementById("categoryFilter").value ;
var fillter = products.filter(data=> {
  return category === "" || data.category === category
})
displayProducts(fillter)
}

displayProducts(products);
