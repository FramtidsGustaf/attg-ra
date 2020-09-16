document.addEventListener("DOMContentLoaded", function (event) {
  let btn = document.getElementById("btnSend");

  btn.addEventListener("click", function (event) {
    let toDoMessage = document.getElementById("to-do");
    let newToDo = document.createElement("li");
    let rmvButton = document.createElement("input");
    rmvButton.setAttribute("type", "button");
    rmvButton.setAttribute("value", "Ta bort");
    let doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");

    let theList = document.getElementById("theList");
    newToDo.textContent = toDoMessage.value;
    theList.appendChild(newToDo);
    newToDo.appendChild(rmvButton);
    newToDo.appendChild(doneCheckbox);

    doneCheckbox.addEventListener("click", function (event) {
      if (!doneCheckbox.checked) {
        newToDo.classList.remove("done");
      } else {
        newToDo.setAttribute("class", "done");
      }
    });

    rmvButton.addEventListener("click", function (event) {
      newToDo.remove();
    });

    toDoMessage.value = "";
    toDoMessage.focus();
  });
});
