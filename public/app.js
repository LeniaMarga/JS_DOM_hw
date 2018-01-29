

document.addCat("DOMContentLoaded", function(){

  var newCat =  { name: "Name: Xitzaz", food: "Favorite Food: luxury cat food", img: "not available" };

  var cat = document.getElementById('cat');
  var myNodeList = document.querySelectorAll("li");
  name = myNodeList[0];
  food = myNodeList[1];
  img = myNodeList[2];

  var newUList = document.createElement('ul');

  newUList.classList.add("cat");

  name.innerText = newCat.name;

  food.innerText = newCat.food;

  img.innerText = newCat.img;

  cat.appendChild(name);
  cat.appendChild(food);
  cat.appendChild(img);


})

// var myNodelist = document.querySelectorAll("p");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     myNodelist[i].style.backgroundColor = "red";
// }
