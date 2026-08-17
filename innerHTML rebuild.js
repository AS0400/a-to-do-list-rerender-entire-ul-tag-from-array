let todos = [];

const input = document.getElementById("todo");
const button = document.getElementById("addBtn");
const list = document.getElementById("todolist");

function render(){
    list.innerHTML="";
    todos.forEach((todo)=>{
        list.innerHTML += `<li>${todo}</li>`;
    });
}
button.addEventListener("click" ,()=>{
    const value = input.value;
    todos.push(value);
    render();
    input.value="";
});