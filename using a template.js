let todos = [];

const input = document.getElementById("todo");
const button = document.getElementById("addBtn");
const list = document.getElementById("todolist");
const template = document.getElementById("todoTemplate");

function render(){
    list.innerHTML="";
    todos.forEach((todo)=>{
        const item = template.content.cloneNode(true);
        item.querySelector("li").textContent = todo;
        list.appendChild(item);
    });
}
button.addEventListener("click",()=>{
    const value = input.value;
    todos.push(value);
    render();
    input.value="";
});