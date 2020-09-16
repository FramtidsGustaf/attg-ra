document.addEventListener("DOMContentLoaded", function (event) {
  let btn = document.getElementById("btnSend");

  btn.addEventListener("click", function (event) {
    let toDoMessage = document.getElementById("to-do");
    let newToDo = document.createElement("li");
    let rmvButton = document.createElement("input");
    rmvButton.setAttribute("type", "button");
    rmvButton.setAttribute("value", "Ta bort");
    let doneButton = document.createElement("input");
    doneButton.setAttribute("type", "button");
    doneButton.setAttribute("value", "Färdig");

    let theList = document.getElementById("theList");
    newToDo.textContent = toDoMessage.value;
    theList.appendChild(newToDo);
    newToDo.appendChild(rmvButton);
    newToDo.appendChild(doneButton);

    doneButton.addEventListener("click", function (event) {
      if (newToDo.className === "done") {
        newToDo.classList.remove("done");
        doneButton.setAttribute("value", "färdig");
      } else {
        newToDo.setAttribute("class", "done");
        doneButton.setAttribute("value", "ofärdig");
      }
    });

    rmvButton.addEventListener("click", function (event) {
      newToDo.remove();
    });

    toDoMessage.value = "";
    toDoMessage.focus();
  });
});
