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
