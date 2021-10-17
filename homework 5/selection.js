let colorArray = ["rainydaycircle"]

function selectColor(id) {
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
  let thumbOne = document.getElementById("thumbnailone");
  let thumbTwo = document.getElementById("thumbnailtwo");
  let thumbThree = document.getElementById("thumbnailthree");
  let thumbMain = document.getElementById("largethumbnail");
  if (id === "morninghazecircle") {
    thumbMain.src = "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwODU4NDEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
    thumbOne.src = "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwODU4NDEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
    thumbTwo.src = "https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
    thumbThree.src = "https://images.unsplash.com/photo-1580462766253-b8020c73e440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxNjg4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
  }
  else if (id === "rainydaycircle") {
    thumbMain.src = "https://images.unsplash.com/photo-1617325721270-06dce2689456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ3NzA5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbOne.src = "https://images.unsplash.com/photo-1617325721270-06dce2689456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzQ3NzA5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbTwo.src = "https://images.unsplash.com/photo-1617325710236-4a36d46427c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTQ4NjQ3Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbThree.src = "https://images.unsplash.com/photo-1519961655809-34fa156820ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
  }
  else if (id === "cozydenimcircle") {
    thumbMain.src = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
    thumbOne.src = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
    thumbTwo.src = "https://images.unsplash.com/photo-1546695950-187ecfb4a91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxNzM5Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbThree.src = "https://images.unsplash.com/photo-1565202726392-3e7f14ca830e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
  }
  else {
    thumbMain.src = "https://images.unsplash.com/photo-1621857090936-6e64beb21b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbOne.src = "https://images.unsplash.com/photo-1621857090936-6e64beb21b53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbTwo.src = "https://images.unsplash.com/photo-1613252086325-ac35531fc326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDQxODQ2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
    thumbThree.src = "https://images.unsplash.com/photo-1613252067198-cc29a8368d09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTM5ODkwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080";
  }
}

function bagPopUp() {
  let quant = document.getElementById('quantity').value;
  let select = document.getElementById('dropdownfilling');
  let text = select.options[select.selectedIndex].text;
  let color = document.getElementById(colorArray[colorArray.length-1]).id;
  if (quant != 0) {
   document.getElementById("popupcircle").innerHTML = `${quant}`;
   popupcircle.style.visibility = "visible";
 }
}
