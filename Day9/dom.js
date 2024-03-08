//by className

const heading = document.getElementsByClassName("heading1");
console.log(heading);

//by tagName

const heading2 = document.getElementsByTagName("h2");
console.log(heading2[0]);

//by querySelector
const listItems = document.querySelectorAll("#list li");
console.log(listItems);

//Modifying Elements
//innerHTML
heading[0].innerHTML = "<h6>Learning DOM Manipulation</h6>";
// allows you to set the HTML content inside an element as a string. This means it includes all HTML tags and their content.

//textContent
heading2[0].textContent = "Element Manipulation";
// returns or allows you to set the text content of an element, excluding any HTML tags. It returns only the text content inside the element, without any formatting or HTML structure.

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

// Removing an element:
const elementToRemove = document.querySelector("li");
elementToRemove.remove();
console.log("Removed Element:", elementToRemove);

//handling events
button.addEventListener("click", addListItem);

function addListItem() {
	const newListItem = document.createElement("li");
	newListItem.textContent = "Another Task";

	document.getElementById("list").appendChild(newListItem);
}
