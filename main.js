function getDataFromDB() {
  var prodcuts = {
    ///////////////////////////////////////////// smartphones ////////////////////////////////////////////

    products: [
      {
        id: 1,
        title: "iPhone 9",
        price: 549,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      },
      {
        id: 2,
        title: "iPhone X",
        price: 697,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      },

      {
        id: 2,
        title: "iPhone XS Max",
        price: 899,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/2.jpg",
      },

      {
        id: 4,
        title: "OPPOF19",
        price: 280,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      },

      {
        id: 5,
        title: "Huawei P30",
        price: 499,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      },

      {
        id: 4,
        title: "OPPOF19 Pro",
        price: 388,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/3.jpg",
      },

      ///////////////////////////////////////////////// Laptop ////////////////////////////////////////////////////////////////

      {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      },

      {
        id: 6,
        title: "MacBook ",
        price: 1500,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/6/3.png",
      },

      {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      },

      {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        price: 1609,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      },

      {
        id: 9,
        title: "Infinix INBOOK X1 pro",
        price: 1099,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      },

      {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        price: 1900,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      },

      ////////////////////////////////////////////   OiL   ///////////////////////////////////////////////////////////

      {
        id: 11,
        title: "perfume Oil",
        price: 13,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      },

      {
        id: 11,
        title: "perfume Oil Xtra",
        price: 20,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/11/1.jpg",
      },

      {
        id: 12,
        title: "Brown Perfume Royal_Mirage",
        price: 40,
        brand: "Royal_Mirage",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      },

      {
        id: 13,
        title: "Fog Scent Xpressio ",
        price: 30,
        brand: "Fog Scent Xpressio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      },
      {
        id: 14,
        title: "Non-Alcoholic Concentrated Perfume Oil",
        price: 120,
        brand: "Al Munakh",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      },
      {
        id: 15,
        title: "Eau De Perfume Spray Lord Rehab ",
        price: 50,
        brand: "Lord-Al-Rehab",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      },
    ],
    total: 100,
    skip: 0,
    limit: 18,
  };
  return prodcuts.products;
}

/*-------------------------------- Creat -------------------------------------*/

var products = getDataFromDB();

var Cart = [];
function createElement(Product) {
  var pic = document.createElement("img");
  var picContainer = document.createElement("div");
  var Title = document.createElement("h1");
  var TextContainer = document.createElement("div");
  var Card = document.createElement("div");
  var Price = document.createElement("h5");
  var adds = document.createElement("button");

  pic.src = Product.thumbnail;
  Title.innerHTML = Product.title;
  Price.innerHTML = Product.price + " $";
  (adds.innerHTML = "Add"), TextContainer.append(Title, Price);
  picContainer.append(pic);
  Card.append(picContainer, TextContainer, adds);

  document.getElementById("my_product").appendChild(Card);

  picContainer.setAttribute("class", "picContainer");
  Card.setAttribute("class", "Card");
  pic.setAttribute("class", "image");
  TextContainer.setAttribute("class", "txt");
  adds.setAttribute("class", "but");
  Price.setAttribute("class", "price");

  adds.onclick = function () {
    Cart.push(Product);
    localStorage.setItem("Cart", JSON.stringify(Cart));
  };
}

/*-------------------------------- Shop -------------------------------------*/

function Shop() {
  document.getElementById("my_product").innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    createElement(products[i]);
  }
}

/*-------------------------------- Filter -------------------------------------*/

function Filter(Category) {
  document.getElementById("my_product").innerHTML = "";

  for (var i = 0; i < products.length; i++) {
    if (products[i].category == Category) {
      createElement(products[i]);
    }
  }
}

/*-------------------------------- search -------------------------------------*/

function SearchItem() {
  var search = document.getElementById("Search_Input");
  document.getElementById("my_product").innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].title && products[i].category == search.value) {
      createElement(products[i]);
    }
  }
}

/*-------------------------------- Sort -------------------------------------*/

products.sort((a, b) => {
  return a.price - b.price;
});

// function SortProduct(a, b){
// return a.Price - b.Price;
// }

// products.sort(SortProduct)


/*-------------------------------- ADD CART -------------------------------------*/

function GetCart() {
  var Arr = JSON.parse(localStorage.getItem("Cart"));
  for (let i = 0; i < Arr.length; i++) {
    var pic = document.createElement("img");
    var Title = document.createElement("h1");
    var TextContainer = document.createElement("div");
    var Card = document.createElement("div");
    var Price = document.createElement("h5");
    var adds = document.createElement("button");

    pic.src = Arr[i].thumbnail;
    Title.innerHTML = Arr[i].title;
    Price.innerHTML = Arr[i].price + " $";
    (adds.innerHTML = "Delete"), TextContainer.append(Title, Price);
    Card.append(pic, TextContainer, adds);
    document.body.appendChild(Card);
    Card.setAttribute("class", "Card");
    pic.setAttribute("class", "image");
    TextContainer.setAttribute("class", "txt");
    adds.setAttribute("class", "but");
    Price.setAttribute("class", "price");

    //--------------Remove----------------------
    
    adds.onclick = function () {
      Arr.splice(i, 1);
      localStorage.setItem("Cart", JSON.stringify(Arr));
      location.reload();
    };
  }
}

/////////////////////////////////////////////////////////////////////////////////////////



