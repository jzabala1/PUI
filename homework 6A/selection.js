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



function bagPopUp() {
  //this function makes it so the pop up accurately has the quantity and also makes things popup when add to bag is clicked
  //also stores information from page
  let quant = document.getElementById('quantity').value;
  let select = document.getElementById('dropdownfilling');
  let text = select.options[select.selectedIndex].text;
  let color = document.getElementById(colorArray[colorArray.length-1]).id;
  if (quant != 0) {
   document.getElementById("popupcircle").innerHTML = `${quant}`;
   popupcircle.style.visibility = "visible";
   popup.style.visibility = "visible";
 }
}
