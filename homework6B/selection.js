let colorArray = ["rainydaycircle"];

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
    thumbMain.alt = "Grey couch with 7 pillows set across the couch the yellow rectangular pillow is the main focus";
    thumbOne.src = `https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxhbGx8fHx8fHx8fHwxNjIwODU4NDEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbOne.alt = "Grey couch with 7 pillows set across the couch the yellow rectangular pillow is the main focus";
    thumbTwo.src = `https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbTwo.alt = "Bed with black bedspread and white pillows with one yellow rectangular decorative pillow across the two white sleeping pillow";
    thumbThree.src = `https://images.unsplash.com/photo-1580462766253-b8020c73e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxNjg4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbThree.alt = "White shaggy dog resting its head on a yellow rectangular pillow";
  }
  else if (id === "rainydaycircle") {
    thumbMain.src = `https://images.unsplash.com/photo-1617325721270-06dce2689456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ3NzA5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbMain.alt = "Comfortable cane chair with cushions by the window";
    thumbOne.src = `https://images.unsplash.com/photo-1617325721270-06dce2689456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ3NzA5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbOne.alt = "Comfortable cane chair with cushions by the window";
    thumbTwo.src = `https://images.unsplash.com/photo-1617325710236-4a36d46427c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTQ4NjQ3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbTwo.alt = "Wicker chair with a long grey pillow on it";
    thumbThree.src = `https://images.unsplash.com/photo-1519961655809-34fa156820ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbThree.alt = "Round couch with a stack of white,grey,and blue pillows";
  }
  else if (id === "cozydenimcircle") {
    thumbMain.src = `https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbMain.alt = "Beige loveseat to large blue pillows and two grey patterned pillows on either side and a rectangular dark blue pillow in the middle";
    thumbOne.src = `https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbOne.alt = "Beige loveseat to large blue pillows and two grey patterned pillows on either side and a rectangular dark blue pillow in the middle";
    thumbTwo.src = `https://images.unsplash.com/photo-1546695950-187ecfb4a91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxNzM5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbTwo.alt = "Large dog sniffing a dark blue pillow on a couch";
    thumbThree.src = `https://images.unsplash.com/photo-1565202726392-3e7f14ca830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXw
    xfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit`;
    thumbThree.alt = "Grey cat on a dark grey couch. It has its head sticking out from under a dark blue rectangular pillow.";
  }
  else {
    thumbMain.src = `https://images.unsplash.com/photo-1621857090936-6e64beb21b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbMain.alt = "A close up of a light pink rectangular pillow lying against a patterned pillow";
    thumbOne.src = `https://images.unsplash.com/photo-1621857090936-6e64beb21b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbOne.alt = "A close up of a light pink rectangular pillow lying against a patterened pillow";
    thumbTwo.src = `https://images.unsplash.com/photo-1613252086325-ac35531fc326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQ2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbTwo.alt = "A bed with a white bed spread and two pink pillows, there is a small rectangular pink pillow resting against them";
    thumbThree.src = `https://images.unsplash.com/photo-1613252067198-cc29a8368d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw
    xfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTM5ODkwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080`;
    thumbThree.alt = "A closeup of a bed with a white bed spread and two pink pillows, there is a small rectangular pink pillow resting against them";
  }
}

function Product(name, quantity, image, color, price, altText, filling) {
  //creating a product object 
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
  //also stores information from page (makes a new product, updates the total cost, total items, and the cart)
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
  let subTotal = parseInt(localStorage.getItem("total"), 10);
  let priceTrimmed = price.replace("$", "");
  let total = parseInt(productquant, 10) * parseInt(priceTrimmed, 10);
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) { 
      if (product.name === cart[i].name && product.color === cart[i].color && product.filling === cart[i].filling) { 
        let cartquantity = parseInt(cart[i].quantity, 10);
        cartquantity += productquant;
        cart[i].quantity = JSON.stringify(cartquantity);
        localStorage.setItem("cart",JSON.stringify(cart));
        overallQuant += productquant;
        localStorage.setItem("totalItems", JSON.stringify(overallQuant));
        subTotal += total;
        localStorage.setItem("total", JSON.stringify(subTotal));
      }
      else {
        cart.push(product);
        overallQuant += productquant;
        localStorage.setItem("totalItems", JSON.stringify(overallQuant));
        localStorage.setItem("cart",JSON.stringify(cart));
        subTotal += total;
        localStorage.setItem("total", JSON.stringify(subTotal));
        //break is here to make sure that the item is not added again since it will be the last item added to the cart
        break;
      }
    }
  }
  else {
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    overallQuant += productquant;
    localStorage.setItem("totalItems", JSON.stringify(overallQuant));
    subTotal += total;
    localStorage.setItem("total", JSON.stringify(subTotal));    
  }
  checkPopUp(overallQuant);  
  //this is just making sure that the popup after you click add to bag has accurate informtion about the product you added
  let colorTrimmed = color.replace("circle", "") ;
  if (colorTrimmed === "rainyday") {
    colorTrimmed = "Rainy Day";
  }
  else if (colorTrimmed === "morninghaze") {
    colorTrimmed = "Morning Haze";
  }
  else if (colorTrimmed === "cozydenim") {
    colorTrimmed = "Cozy Denim";
  }
  else{
    colorTrimmed = "AfterSchool Special";
  }
  let popupText = document.getElementById("success");
  popupText.innerHTML = `You successfully added ${quant} ${name} in ${colorTrimmed} with ${product.filling} filling in your bag!`;
  popup.style.visibility = "visible";
}

function checkPopUp(overallQuant) {
  //this function just makes sure that when the quantity is 0 the popup doesn't show but if it is greater it shows up 
  if (overallQuant != 0) {
    document.getElementById("popupcircle").innerHTML = parseInt((localStorage.getItem("totalItems")), 10);
    popupcircle.style.visibility = "visible";
  }
}


function onLoad() {
  //these three function initilize the local storage elements
  checkCart();
  checkQuant();
  checkTotal();
  let popupcircle = document.getElementById("popupcircle");
  let cart = JSON.parse(localStorage.getItem("cart"));
  //this makes sure the popup shows up on other pages on load
  if (localStorage.getItem("totalItems") > 0) {
   document.getElementById("popupcircle").innerHTML = parseInt((localStorage.getItem("totalItems")), 10);
   popupcircle.style.visibility = "visible";
  }
  if (cart.length > 0) {
    let subT = parseInt((localStorage.getItem("total")), 10);
    document.getElementById("subtotal").innerHTML = `Subtotal: $${subT}`;
    document.getElementById("total").innerHTML = `Total: $${subT}` ;
    //this manipulates the parts of the product object so that they can be presented in a certain way (changing the color and number into the right format)
    for (let i = 0; i < cart.length; i++) {
      let priceTrimmed = cart[i].price.replace("$", "");
      //Ther rounding with math.round is from stackoverflow user drudge
      let total = parseInt(cart[i].quantity, 10) * parseInt(priceTrimmed, 10);
      let math = (Math.round(total * 100) / 100).toFixed(2);
      let totalPrice = "$" + math;
      let colorTrimmed = cart[i].color.replace("circle", "") ;
      if (colorTrimmed === "rainyday") {
        colorTrimmed = "Rainy Day";
      }
      else if (colorTrimmed === "morninghaze") {
        colorTrimmed = "Morning Haze";
      }
      else if (colorTrimmed === "cozydenim") {
        colorTrimmed = "Cozy Denim";
      }
      else{
        colorTrimmed = "AfterSchool Special";
      }
      if (i === 0) {
        let cartRow = document.createElement('div');
        cartRow.classList.add("row");
        let productContainer = document.getElementById("product-container");
        //this also makes it so that when the bag loads the products load in the right format for the first object
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
          </ul>`;
        cartRow.innerHTML = productDetails;
        productContainer.append(cartRow); 
        let productBagDetails = document.getElementsByClassName("productbagdetails")[i];
    }
      else{
        let cartRow = document.createElement('div');
        cartRow.classList.add("row");
        let productContainer = document.getElementById("product-container");
        //this also makes it so that when the bag loads the products load in the right format for the objects after the first one
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
          </ul>`;
        cartRow.innerHTML = productDetails;
        productContainer.append(cartRow); 
        let productBagDetails = document.getElementsByClassName("productbagdetails")[i];
        let productPicture = document.getElementsByClassName("productimage")[i];
        let editButton = document.getElementsByClassName("editbutton")[i];
        let removeButton = document.getElementsByClassName("removebutton")[i];
        let height = 175 ;
        //the first bag item has a set position and the next cart items postitions are based on their cart index number and the first position
        productBagDetails.style.position = "absolute";
        productBagDetails.style.top = `${(height * i) + 100}px`;
        productPicture.style.position = "absolute";
        productPicture.style.top = `${(height * i) + 100}px`;
        editButton.style.position = "absolute";
        editButton.style.top = `${(height * i) + 245}px`;
        removeButton.style.position = "absolute";
        removeButton.style.top = `${(height * i) + 245}px`;       
    }
   }
  }
  let removeButtons = document.getElementsByClassName("removebutton");
  //got some of this from Web Dev Simplified on youtube (the button parent element remove)
  //this goes through all of the remove buttons and checks if they have been clicked 
  //if they have been clicked it deletes the parent object, updates total, totalItems, and the cart
  for (let i=0; i < removeButtons.length; i++) {
    let button = removeButtons[i];
    button.addEventListener('click', function(event) {
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      let cart = JSON.parse(localStorage.getItem("cart"));
      let overallQuant = parseInt(localStorage.getItem("totalItems"), 10);
      let price = cart[i].price;
      let priceTrimmed = price.replace("$", "");
      let subTotal = parseInt(localStorage.getItem("total"), 10);
      let total = parseInt(cart[i].quantity, 10) * parseInt(priceTrimmed, 10);
      subTotal -= total;
      localStorage.setItem("total", JSON.stringify(subTotal));
      overallQuant -= parseInt(cart[i].quantity, 10);
      localStorage.setItem("totalItems", JSON.stringify(overallQuant));
      cart.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      //this is just so the page updates and so the elements updates 
      location.reload(true);
    });
  }

 }

function checkCart() {
  //function iniatlizes the cart but makes sure that if that cart is already is established it is not made again
  try{
    JSON.parse(localStorage.getItem("cart")).length;
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

function checkTotal() {
  //function iniatlizes the totalcounter but makes sure that if that total is already is established it is not made again
  if (localStorage.getItem("total") === null) {
    localStorage.setItem("total", 0);
  }
}
