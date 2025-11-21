const submit = document.getElementById("submit");
const listEl = document.getElementById("list");
let newtask = [];

function addtask(){
    const taskadd = document.getElementById("addtask");
    const value = taskadd.value.trim();
    if (value === "") {
        alert("Please enter a task");
        return;
    }

    newtask.push(value);
    const index = newtask.length - 1;

    listEl.innerHTML += `<li id="${index}" class="item">${value}</li>`;

    taskadd.value = "";
}

