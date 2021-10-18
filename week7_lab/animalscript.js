function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “Close Up of a panda eating some bamboo”;
  this.image = “https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit”;
}

function Monkey(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “Small monkey that has big green eyes and its mouth open”;
  this.image = “https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit”;
}

function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “Long-haired black and white cat that has a butterfly on its nose”;
  this.image = “https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit”;
}

let animal = [new Panda(), new Monkey(), new Cat()];
let names = ["Mama", "Clyde", "Blue", "Juju", "Dexter", "Mario", "Luigi"];

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIndex = generateRandomIndex(names.length);
  return names[randomIndex];
}

function generateRandomAge() {
  return generateRandomIndex(10);
}

function generateRandomAnimal() {
  let randomIndex = generateRandomIndex(animal.length);
  let randomAnimal = animal[randomIndex];
  if (randomAnimal instanceof Cat) {
    return new Cat(generateRandomName(), generateRandomAge())
  }
  else if (randomAnimal instanceof Monkey) {
    return new Cat(generateRandomName(), generateRandomAge())
  }
  else if (randomAnimal instanceof Panda) {
    return new Panda(generateRandomName(), generateRandomAge())
  }
}

function onLoad() {

  // generate a random animal when the document opens
  let animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}