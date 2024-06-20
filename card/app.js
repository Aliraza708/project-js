var productitem = [
  {
    "title": "Carrot",
    "price": "$1.50 per pound",
    "image": "img/c (1).jpg",
    "category": "Root Vegetable"
  },
  {
    "title": "Broccoli",
    "price": "$2.00 per bunch",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg",
    "category": "Cruciferous Vegetable"
  },
  {
    "title": "Spinach",
    "price": "$1.20 per bunch",
    "image": "img/c (12).jpg",
    "category": "Leafy Green"
  },
  {
    "title": "Tomato",
    "price": "$1.80 per pound",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
    "category": "Fruit Vegetable"
  },
  {
    "title": "Bell Pepper",
    "price": "$2.50 per pound",
    "image": "img/c (2).jpg",
    "category": "Fruit Vegetable"
  },
  {
    "title": "Potato",
    "price": "$1.00 per pound",
    "image": "img/c (16).jpg",
    "category": "Root Vegetable"
  },
  {
    "title": "Onion",
    "price": "$0.90 per pound",
    "image": "img/c (3).jpg",
    "category": "Bulb Vegetable"
  },
  {
    "title": "Garlic",
    "price": "$3.00 per pound",
    "image": "img/c (4).jpg",
    "category": "Bulb Vegetable"
  },
  {
    "title": "Zucchini",
    "price": "$1.70 per pound",
    "image": "img/c (5).jpg",
    "category": "Squash"
  },
  {
    "title": "Eggplant",
    "price": "$2.20 per pound",
    "image": "img/c (6).jpg",
    "category": "Fruit Vegetable"
  },
  {
    "title": "Cucumber",
    "price": "$1.30 per pound",
    "image": "img/c (7).jpg",
    "category": "Gourd"
  },
  {
    "title": "Lettuce",
    "price": "$1.50 per head",
    "image": "img/c (0).jpg",
    "category": "Leafy Green"
  },
  {
    "title": "Kale",
    "price": "$2.50 per bunch",
    "image": "img/c (13).jpg",
    "category": "Leafy Green"
  },
  {
    "title": "Cauliflower",
    "price": "$2.70 per head",
    "image": "img/c (8).jpg",
    "category": "Cruciferous Vegetable"
  },
  {
    "title": "Sweet Potato",
    "price": "$1.50 per pound",
    "image": "img/download (8).jpg",
    "category": "Root Vegetable"
  },
  {
    "title": "Beet",
    "price": "$2.00 per bunch",
    "image": "img/c (9).jpg",
    "category": "Root Vegetable"
  },
  {
    "title": "Mushroom",
    "price": "$3.50 per pound",
    "image": "img/c (14).jpg",
    "category": "Fungus"
  },
  {
    "title": "Corn",
    "price": "$0.80 per ear",
    "image": "img/c (10).jpg",
    "category": "Grain Vegetable"
  },
  {
    "title": "Peas",
    "price": "$1.90 per pound",
    "image": "img/c (11).jpg",
    "category": "Legume"
  },
  {
    "title": "Green Bean",
    "price": "$2.00 per pound",
    "image": "img/c (15).jpg",
    "category": "Legume"
  }
]

var allproduct =document.getElementById("all-product");
var cardNumber = document.getElementById("ad")
  for(var i = 0 ; i < productitem.length ; i++){
    console.log("product =>", productitem[i])
   var allproducts = `<div class="lg:w-1/4 md:w-1/2 p-4 w-full box1">
    <a class="block relative h-48 rounded overflow-hidden">
        <img  alt="ecomerence"
        class="object-cover pbject-center w-full h-full block"
        src="${productitem[i].image}"/>                    
    </a>
    <div class="mt-4">
        <h3 class="text-gray-500 text-vs tracking-widest title-font mb-1">${productitem[i].category}</h3>
       <h2 class="text-gray-500 title-font text-lg font-medium">${productitem[i].title}</h2>
       <div class = "add">
       <p class="mt-1">$${productitem[i].price}</p>
       <button onclick="add(this)">add</button>
       </div>
    </div>
</div>`
      allproduct.innerHTML += allproducts
  };
function add(element){

  // console.log("element = >" , element)

  if(element.innerHTML == "added"){
 
    cardNumber.innerText =  cardNumber.innerText - 1;
    element.innerText = "Add"


  }else{
    cardNumber.innerText =  parseInt(cardNumber.innerText )+1;
    element.innerText = "added"
  }

}
