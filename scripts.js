const form = document.querySelector("form");

const resetBtn = document.getElementById("addBtn");

const clearInput = document.getElementById("userInput");

resetBtn.onclick = form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputElement = document.getElementById("userInput");
  console.table(inputElement.value);

  const contentArea = document.getElementById("content-Area");
  const tasks = document.createElement("div");
  tasks.className = "task";

  const checkBx = document.createElement("input");
  checkBx.type = "checkbox";
  checkBx.className = "check";
  tasks.appendChild(checkBx);

  checkBx.onclick = () => {
    if (checkBx.checked) {
      pAnswers.style = "text-decoration: line-through";
    } else {
      pAnswers.style = "text-decoration: none";
    }
  };

  const pAnswers = document.createElement("p");
  pAnswers.innerText = inputElement.value;
  pAnswers.className = "pClass";

  tasks.append(pAnswers);

  const answerBtn = document.createElement("button");
  answerBtn.innerText = "🗑️";
  tasks.appendChild(answerBtn);

  answerBtn.onclick = () => {
    tasks.remove();
  };

  contentArea.appendChild(tasks);

  clearInput.value = "";
});
