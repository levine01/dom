//console.dir(document);

//console.log(document.domain); //domain
//console.log(document.URL); //url
//console.log(document.title); //title
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all); // all information
//console.log(document.all[8]);
//console.log(document.forms);
//console.log(document.links);

//SELECTORS
//GETELEMENTBYID

var headerTitle = document.getElementById("header-title");
console.log(headerTitle);

var items = document.getElementById("items");
console.log(items);

//headerTitle.innerText = "Science Students";
//headerTitle.textContent = "Humanity Students";
console.log(headerTitle.innerText);
//headerTitle.innerHtML = "<h3>Hello Students</h3>";**

//styles
headerTitle.style.fontSize = "5rem";
headerTitle.style.borderBottom = "solid .5rem #777";

//getElementByClassName

var items = document.getElementsByClassName("list-group-item");
console.log(items);
items[0].textContent = "Dan Musungu";
items[1].style.backgroundColor = "blue";
items[1].style.color = "white";

for (var i = 0; i < items.clientHeight; i++) {
  items[i].style.backgroundColor = "#f4f5f4";
}

//getElementsByTagname

var li = document.getElementsByTagName("li");
console.log(li);

li[1].textContent = "levine hey";

//QUERYSELECTOR//

var header = document.querySelector("#main-header");
header.style.fontSize = "2rem";
//header.style.color = "white";

var input = document.querySelector("input");
input.value = "Explore";

//var submit = document.querySelector(input[(type = "submit"]));
//submit.value = "SEND";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style, (color = "coral");

//querySelectorAll/....getelementbyid

var titles = document.querySelectorAll(".title");
console.log(titles);
titles[1].textContent = "Classmates";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#777";
}

//traversing the dom
var itemList = document.querySelector("#items");

//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#555";
console.log(itemList.parentElement.parentNode.parentNode);

//childNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "lightgreen";

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Levine Mugeni";

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Habby Nakhulo";

//nextSiblings
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.textContent = "Nakhone Mugeni";

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);

//createElement
var newDiv = document.createElement("div");

//adding class
newDiv.className = "teachers";

//adding Attribute
newDiv.setAttribute("title", "Hello Teachers");

//console.log(newDiv);
//create textnode
var newDivText = document.createTextNode("New Students");

//adding new textNode
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h2 = document.querySelector("header h2");

//console.log(newDivText);

//container.insertBefore(newDiv, h2);

//newDiv.style.fontSize = "1.5rem";

//container.insertBefore(newDiv, h2);

//Events
var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  // console.log("button clicked");
  //document.getElementById("header-title").textContent = "Top Students";
  //console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);
  //console.log(e.altKey);
  //console.log(e.shiftkey);
  // console.log(e.ctrlKey);
}

var button = document.getElementById("button");
var box = document.getElementById("box");

//button.addEventListener("click", runEvent);

//button.addEventListener("mouseout", runEvent);
//box.addEventListener("mouseout", runEvent);
//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseleave", runEvent);
//box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[tyype="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

itemInput.addEventListener("keydown", runEvent);
itemInput.addEventListener("keyup", runEvent);
itemInput.addEventListener("keypress", runEvent);

itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("paste", runEvent);
itemInput.addEventListener("input", runEvent);

select.addEventListener("change", runEvent);
select.addEventListener("input", runEvent);
form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);

  /*document.body.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ", 50)";*/
  console.log(e.target.value);
  document.getElementById("output").innerHtml =
    "<h3>" + e.target.value + "</h3>";
}
