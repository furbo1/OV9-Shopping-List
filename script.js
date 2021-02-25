var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var buttons = document.querySelectorAll("button");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("list-group-item", "active")
	let deleteButton = document.createElement("button")
	li.appendChild(deleteButton);
	deleteButton.classList.add("fa", "fa-trash", "btn")
	
  ul.appendChild(li);
	input.value = "";

	function deleteItem(){
		li.remove()
	}
	function completed(){
		li.addEventListener("click", ()=>{
			li.classList.toggle('done');
		})
	}

	deleteButton.addEventListener("click",deleteItem)
	li.addEventListener("click",completed)
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

listItems.forEach(item => {
	item.addEventListener("click", ()=>{
		item.classList.toggle('done');
	})
})

buttons.forEach(b => {
	b.addEventListener("click", ()=>{
		if(b.classList.contains('btn')){
			
			b.parentNode.classList.add('clicked')
			console.log(b)
		}
		
	})
	
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);