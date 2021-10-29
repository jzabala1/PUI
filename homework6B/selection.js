let colorArray = ["rainydaycircle"]

function selectColor(id) {
  //This function makes the clicked on color circle seledcted by having a border 
  let colorCircle = document.getElementById(id);
  if (id != colorArray[colorArray.length-1]){
    colorCircle.style.border = "solid";
    let prevCircle = document.getElementById(colorArray[colorArray.length-1]);
    prevCircle.style.border = "none";
    colorArray.push(id);
    changeImage(id);
  }
}

function changeImage(id) {
  //this function goes into the documents and changes the images depending on the color selected 
  let thumbOne = document.getElementById("thumbnailone");
  let thumbTwo = document.getElementById("thumbnailtwo");
  let thumbThree = document.getElementById("thumbnailthree");
  let thumbMain = document.getElementById("largethumbnail");
  if (id === "morninghazecircle") {
    thumbMain.src = `https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxhbGx8fHx8fHx8fHwxNjIwODU4NDEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbMain.alt = "Grey couch with 7 pillows set across the couch the yellow rectangular pillow is the main focus"
    thumbOne.src = `https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxhbGx8fHx8fHx8fHwxNjIwODU4NDEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbOne.alt = "Grey couch with 7 pillows set across the couch the yellow rectangular pillow is the main focus"
    thumbTwo.src = `https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbTwo.alt = "Bed with black bedspread and white pillows with one yellow rectangular decorative pillow across the two white sleeping pillow"
    thumbThree.src = `https://images.unsplash.com/photo-1580462766253-b8020c73e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxNjg4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbThree.alt = "White shaggy dog resting its head on a yellow rectangular pillow"
  }
  else if (id === "rainydaycircle") {
    thumbMain.src = `https://images.unsplash.com/photo-1617325721270-06dce2689456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ3NzA5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbMain.alt = "Comfortable cane chair with cushions by the window"
    thumbOne.src = `https://images.unsplash.com/photo-1617325721270-06dce2689456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ3NzA5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbOne.alt = "Comfortable cane chair with cushions by the window"
    thumbTwo.src = `https://images.unsplash.com/photo-1617325710236-4a36d46427c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTQ4NjQ3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbTwo.alt = "Wicker chair with a long grey pillow on it"
    thumbThree.src `https://images.unsplash.com/photo-1519961655809-34fa156820ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbThree.alt = "Round couch with a stack of white,grey,and blue pillows"
  }
  else if (id === "cozydenimcircle") {
    thumbMain.src = `https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbMain.alt = "Beige loveseat to large blue pillows and two grey patterned pillows on either side and a rectangular dark blue pillow in the middle"
    thumbOne.src = `https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbOne.alt = "Beige loveseat to large blue pillows and two grey patterned pillows on either side and a rectangular dark blue pillow in the middle"
    thumbTwo.src = `https://images.unsplash.com/photo-1546695950-187ecfb4a91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxNzM5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbTwo.alt = "Large dog sniffing a dark blue pillow on a couch"
    thumbThree.src = `https://images.unsplash.com/photo-1565202726392-3e7f14ca830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbThree.alt = "Grey cat on a dark grey couch. It has its head sticking out from under a dark blue rectangular pillow."
  }
  else {
    thumbMain.src = `https://images.unsplash.com/photo-1621857090936-6e64beb21b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbMain.alt = "A close up of a light pink rectangular pillow lying against a patterned pillow"
    thumbOne.src = `https://images.unsplash.com/photo-1621857090936-6e64beb21b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbOne.alt = "A close up of a light pink rectangular pillow lying against a patterened pillow"
    thumbTwo.src = `https://images.unsplash.com/photo-1613252086325-ac35531fc326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQ2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbTwo.alt = "A bed with a white bed spread and two pink pillows, there is a small rectangular pink pillow resting against them"
    thumbThree.src = `https://images.unsplash.com/photo-1613252067198-cc29a8368d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTM5ODkwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbThree.alt = "A closeup of a bed with a white bed spread and two pink pillows, there is a small rectangular pink pillow resting against them"
  }
}

function Product(name, quantity, image, color, price, altText, filling) {
  this.name = name;
  this.quantity = quantity;
  this.image = image;
  this.color = color;
  this.price = price;
  this.alt = altText;
  this.filling = filling;
  this.type = "Product"; 
}

function bagPopUp() {
  //this function makes it so the pop up accurately has the quantity and also makes things popup when add to bag is clicked
  //also stores information from page
  let quant = document.getElementById('quantity').value;
  let select = document.getElementById('dropdownfilling');
  let text = select.options[select.selectedIndex].text;
  let color = document.getElementById(colorArray[colorArray.length-1]).id;
  let name = document.getElementById('detailtitle').textContent;
  let price = document.getElementById('productdetailprice').textContent;
  let image = document.getElementById('largethumbnail').src;
  let imageAlt = document.getElementById('largethumbnail').image_alt;
  let product = new Product(name, quant, image, color, price, imageAlt, text); 
  let cart = JSON.parse(localStorage.getItem("cart"));
  let overallQuant = parseInt(localStorage.getItem("totalItems"), 10);
  let productquant = parseInt(product.quantity, 10);
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) { 
      if (product.name === cart[i].name && product.color === cart[i].color) { 
        console.log("first")
        let cartquantity = parseInt(cart[i].quantity, 10);
        cartquantity += productquant;
        cart[i].quantity = JSON.stringify(cartquantity);
        localStorage.setItem("cart",JSON.stringify(cart));
        overallQuant += productquant;
        localStorage.setItem("totalItems", JSON.stringify(overallQuant));
      }
      else {
        console.log("seconnd")
        cart.push(product);
        overallQuant += productquant;
        localStorage.setItem("totalItems", JSON.stringify(overallQuant));
        localStorage.setItem("cart",JSON.stringify(cart));
        break;
      }
    }
  }
  else {
    console.log("third")
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    overallQuant += productquant;
    localStorage.setItem("totalItems", JSON.stringify(overallQuant));
  }
  checkPopUp(overallQuant);  
  popup.style.visibility = "visible";
}

function checkPopUp(overallQuant) {
  if (overallQuant != 0) {
    document.getElementById("popupcircle").innerHTML = parseInt((localStorage.getItem("totalItems")), 10);
    popupcircle.style.visibility = "visible";
  }
}


function onLoad() {
  checkCart();
  checkQuant();
  let popupcircle = document.getElementById("popupcircle");
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (localStorage.getItem("totalItems") > 0) {
   document.getElementById("popupcircle").innerHTML = parseInt((localStorage.getItem("totalItems")), 10);
   popupcircle.style.visibility = "visible";
  }
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let priceTrimmed = cart[i].price.replace("$", "")
      //Ther rounding with math.round is from stackoverflow user drudge
      let totalPrice = "$" + (Math.round(parseInt(cart[i].quantity, 10) * parseInt(priceTrimmed, 10) * 100) / 100).toFixed(2);
      let colorTrimmed = cart[i].color.replace("circle", "") 
      if (colorTrimmed === "rainyday") {
        colorTrimmed = "Rainy Day"
      }
      else if (colorTrimmed === "morninghaze") {
        colorTrimmed = "Morning Haze"
      }
      else if (colorTrimmed === "cozydenim") {
        colorTrimmed = "Cozy Denim"
      }
      else{
        colorTrimmed = "AfterSchool Special"
      }
      if (i === 0) {
        let cartRow = document.createElement('div');
        cartRow.classList.add("row");
        let productContainer = document.getElementById("product-container");
        console.log( )
        let productDetails = `
          <img class = "productimage" src="${cart[i].image}" 
          alt="${cart[i].altText}">
          <ul class = "productbagdetails">
            <li class ="productli">${cart[i].name}</li>
            <li class ="productli">Color: ${colorTrimmed}</li>
            <li class ="productli">Filling: ${cart[i].filling}</li>
          </ul>
          <button class="bagbutton editbutton">Edit</button>
          <button class="bagbutton removebutton">Remove</button>
          <ul class = "productnumbers"> 
            <li class = "productnumbersli" id="pricebag">${cart[i].price}</li>
            <li class = "productnumbersli" id="quantbag">${cart[i].quantity}</li>
            <li class = "productnumbersli" id="totalbag">${totalPrice}</li>
          </ul>`
        cartRow.innerHTML = productDetails;
        productContainer.append(cartRow); 
        let productBagDetails = document.getElementsByClassName("productbagdetails")[i];
    }
      else{
        let cartRow = document.createElement('div');
        cartRow.classList.add("row");
        let productContainer = document.getElementById("product-container");
        let productDetails = `
          <img class = "productimage" src="${cart[i].image}" 
          alt="${cart[i].altText}">
          <ul class = "productbagdetails">
            <li class ="productli">${cart[i].name}</li>
            <li class ="productli">Color: ${colorTrimmed}</li>
            <li class ="productli">Filling: ${cart[i].filling}</li>
          </ul>
          <button class="bagbutton editbutton">Edit</button>
          <button class="bagbutton removebutton">Remove</button>
          <ul class = "productnumbers"> 
            <li class = "productnumbersli" id="pricebag">${cart[i].price}</li>
            <li class = "productnumbersli" id="quantbag">${cart[i].quantity}</li>
            <li class = "productnumbersli" id="totalbag">${totalPrice}</li>
          </ul>`
        cartRow.innerHTML = productDetails;
        productContainer.append(cartRow); 
        let productBagDetails = document.getElementsByClassName("productbagdetails")[i];
        let productPicture = document.getElementsByClassName("productimage")[i];
        let editButton = document.getElementsByClassName("editbutton")[i];
        let removeButton = document.getElementsByClassName("removebutton")[i];
        let height = 175 
        productBagDetails.style.position = "absolute"
        productBagDetails.style.top = `${(height * i) + 100}px`
        productPicture.style.position = "absolute"
        productPicture.style.top = `${(height * i) + 100}px`
        editButton.style.position = "absolute"
        editButton.style.top = `${(height * i) + 245}px`
        removeButton.style.position = "absolute"
        removeButton.style.top = `${(height * i) + 245}px`        
    }
   }
  }
  let removeButtons = document.getElementsByClassName("removebutton");
  for (let i=0; i < removeButtons.length; i++) {
    let button = removeButtons[i];
    button.addEventListener('click', function(event) {
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      console.log(buttonClicked.parentElement);
      let cart = JSON.parse(localStorage.getItem("cart"));
      cart.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    })
  }

 }



function checkCart() {
  //function iniatlizes the cart but makes sure that if that cart is already is established it is not made again
  try{
    JSON.parse(localStorage.getItem("cart")).length
  }
  catch(error){
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

function checkQuant() {
  //function iniatlizes the totalItems counter but makes sure that if that totalItems is already is established it is not made again
  if (localStorage.getItem("totalItems") === null) {
    localStorage.setItem("totalItems", 0);
  }
}



//when page loads go through the cart and if the something is in cart display items

//function that on click of removal button sets the in bag to false

//Update totals in the cart 


//challenge one - make sure things that are not overwritten only initialized once
//challenge two - make sure things taken from storage are in the right form to be manipulated
//overcame with a lot of print statments 
//then also learning how to use try, catch, and break