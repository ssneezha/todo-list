const input = document.querySelector(".input-container input");
const button = document.querySelector(".input-container button");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  li.innerText = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});

