var products = [
  {
    id: 1,
    name: "Smartphone",
    description: "A high-end smartphone with a great camera",
    price: 699.99,
    category: "Electronics",
    inStock: true,
    imageUrl: "img/p.avif"
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
    id: 21,
    name: "3D Printer",
    title: "Industrial 3D Printer",
    description: "An industrial-grade 3D printer for rapid prototyping and production.",
    price: 15000,
    category: "Additive Manufacturing",
    imageUrl: "img/3 d.jpg"
  },
];

var search = document.getElementById("input");
var but = document.getElementById("but");
var cardNumber = document.getElementById("cardNumber");
var container = document.getElementById("container");
var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var homecontiner = document.getElementById("homecontiner");
var login_button = document.getElementById("login_button");
var pop = document.getElementById("popapContainer");

// var search = document.getElementById("search");

// Function to display products
function displayProducts(products) {
  var productContainer = document.getElementById("product");
  productContainer.innerHTML = "";
  products.forEach((data) => {
    productContainer.innerHTML += `<div class="card">
      <div class="card-inner">
        <img id="imges" src="${data.imageUrl}" alt="Image 1">
        <div class="card-overlay">
            <h2>${data.name}</h2> 
            <p >${data.description}</p>
            <p>${data.category}</p>
            <p>$${data.price}</p>
            <button onclick="add(this)" id="add_list">Add to list</button>
            
        </div>
      </div>
    </div>`;
  });
} 


but.addEventListener("click", function () {  
  var fillter_name = products.filter(data => data.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()))

  displayProducts(fillter_name)

})
displayProducts(products)
// function filterProducts() {
//   var category = document.getElementById("categoryFilter").value;
//   var fillter = products.filter(data => {
//     return category === "" || data.category === category
//   })
//   displayProducts(fillter)
// }

// var category = document.getElementById("categoryFilter");
// category.addEventListener("change",function(){
//   var fillter = products.filter(data => {
//         return category.value === "" || data.category === category.value
//       })
//       displayProducts(fillter)
// })

// displayProducts(products);




// var home = document.getElementById("home")

// home.addEventListener("click",function(){
//   displayProducts(products);
//    search.value = "";
// })


  //  add cart section
   function add(element){
    if(element.innerHTML == "Added"){
      cardNumber.innerText =  cardNumber.innerText - 1;
      element.innerText = "Add";
      cardNumber.style.color="#FFA4AE"
     if( cardNumber.innerText == 0){
      cardNumber.style.color="black"
     }
  
  
    }else{
      cardNumber.innerText =  parseInt(cardNumber.innerText )+1;
      element.innerText = "Added"
       cardNumber.style.color="#FFA4AE"
    }
   }

  //  login section
  
function run(){
  form.style.display= "block"
 form.classList.add("center")
}
function login(){
  if(!email.value || !password.value) return alert("enter email & password");
  localStorage.setItem("email",email.value);
  checkFuncation()
}
 function checkFuncation(){
    var email = localStorage.getItem("email")
  if(email){
    container.style.display = "none";
    login_button.style.display = "none"
    homecontiner.innerHTML = `<i class="fa-solid fa-circle-user"></i>`
    homecontiner.classList.add("text")
    homecontiner.style.display = "block"
    
    

  }else{
    container.style.display = "block";
    homecontiner.style.display = "none"
    // popap section

    setTimeout(()=>{
      var div = ` <div id="Image"><img src="./newsletter.png" alt="eee"></div>
    <button onclick="cancel()" id="cancel">x</button>
    <div>
      <h1 id ="heading">Subscribe Newsletter.</h1>
    <div id="para">
      <p>Subscribe Newsletter.Subscribe the <b>JUST FOR YOU</b> to get latest products and discount update.</p></div>
      <div class="popapContainerinput" ><input id="email_com" type="text" placeholder="Email Address">
       <div> <button onclick="sub_login()" id="Subscribe">SUBSCRIBE</button></div>
      </div>
     
    </div>`
    pop.style.backgroundColor = "white"
    pop.style.display = "flex"
    pop.style.position = "absolute"
    pop.style.width = "850px"
    pop.style.height = "400px"
    pop.style.boxShadow = "0 0 20px #787878"
    pop.style.borderRadius = "10px"
    pop.style.zIndex = "10px"
    pop.innerHTML += div
    },4000)
   
  
  }
}

checkFuncation()
function cancel(){
  pop.style.display = "none"
 }
 function loginForm_cancel(){
  form.style.display = "none"
  
 }


