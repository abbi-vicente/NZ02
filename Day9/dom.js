//by className

const heading = document.getElementsByClassName("heading1");
console.log(heading);

//by tagName

const heading2 = document.getElementsByTagName("h2");
console.log(heading2[0]);

//by querrySelector
const listItems = document.querySelectorAll("#list li");
console.log(listItems);

//Modifying Elements
//innerHTML
heading[0].innerHTML = "Learning DOM Manipulation";

//textContent
heading2[0].textContent = "Element Manipulation";

//setting attributes
heading[0].setAttribute("class", "highlight");

//changing style property
const button = document.getElementById("btn");
button.style.backgroundColor = "skyblue";

//creating elements
const container = document.getElementsByClassName("container");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

container[0].appendChild(newParagraph);

//handling events
button.addEventListener("click", addListItem);

function addListItem() {
	const newListItem = document.createElement("li");
	newListItem.textContent = "Another Task";

	document.getElementById("list").appendChild(newListItem);
}
