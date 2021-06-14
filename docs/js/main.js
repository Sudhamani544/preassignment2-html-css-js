const todoInput = document.querySelector('#title');
const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const todoList = document.querySelector('#todos');
const removeTodo=document.querySelector('.btn1');

myForm.addEventListener('submit', onAdd); //to add items on todolist
todoList.addEventListener('click',onClick); //to remove or crosscheck items on todolist
removeTodo.addEventListener('click',onRemove); //to remove all items on todolist

function onAdd(e){
	e.preventDefault();	

	if(todoInput.value === ''){
		msg.innerHTML = 'please enter a task to add';

		// Remove error after 3 seconds
    	setTimeout(() => msg.remove(), 5000)

	}else {
		const li=document.createElement('li');
		li.appendChild(document.createTextNode(`${todoInput.value}`));
		
		//append check button to todolist item of li
		const completedButton = document.createElement('button');
	    completedButton.innerHTML = "\u2713";
	    completedButton.classList.add('complete_btn');
	    li.appendChild(completedButton);

	    //append delete button to todolist item of li
		const button = document.createElement("button");
	    const txt = document.createTextNode("\u00D7");
		button.className = "deleteBtn";
		button.appendChild(txt);
		li.appendChild(button);

		//append li element to todoList
		todoList.appendChild(li);

		//clear Fields
		todoInput.value='';
	}
}

function onClick(e){
	const item = e.target;
	//remove the item from todolist
	if(item.classList[0]==='deleteBtn'){
		const todo = item.parentElement;
		todo.style.display="none";		
	}
	//strike the item in todolist
	if(item.classList[0]==='complete_btn'){
		tickbox = document.querySelector('.complete_btn')
		tickbox.innerHTML = "\u2713";
		const todo = item.parentElement;
		todo.classList.toggle("completedItem");
	}

}

function onRemove(e){
	const item = e.target;
	const parentItem = item.parentElement;
	const child = parentItem.childNodes[1]
	const subchild = child.childNodes;
	for(var i=0;i<subchild.length;i++){
		subchild[i].style.display = "none";
	}
}