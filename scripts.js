// RICCARDO REALI - EPICODE - 08-06-2025

const form = document.querySelector("form");

const resetBtn = document.getElementById("addBtn");

const clearInput = document.getElementById("userInput");

//FUNZIONE CLICK DELL'ADD BUTTON

resetBtn.onclick = form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputElement = document.getElementById("userInput");
  console.table(inputElement.value);

  //INSERIMENTO ELEMENTI DOPO IL PRIMO CLICK ADD

  const contentArea = document.getElementById("content-Area");

  //DIV
  const tasks = document.createElement("div");
  tasks.className = "task";

  //CHECKBOX
  const checkBx = document.createElement("input");
  checkBx.type = "checkbox";
  checkBx.className = "check";
  tasks.appendChild(checkBx);

  //FUNZIONE LINEA SU TASK
  checkBx.onclick = () => {
    if (checkBx.checked) {
      pAnswers.style =
        "text-decoration: line-through ; text-decoration-color: tomato;";
    } else {
      pAnswers.style = "text-decoration: none";
    }
  };

  //CREAZIONE P CON TESTO PRESO DA USER INPUT
  const pAnswers = document.createElement("p");
  pAnswers.innerText = inputElement.value;
  pAnswers.className = "pClass";

  tasks.append(pAnswers);

  //CREAZIONE BOTTONE PER CANCELLARE ELEMENTI DALLA LISTA
  const answerBtn = document.createElement("button");
  answerBtn.innerText = "🗑️";
  tasks.appendChild(answerBtn);

  //FUNZIONALITA BOTTONE RIMUOVI ELEMENTI
  answerBtn.onclick = () => {
    tasks.remove();
  };

  contentArea.appendChild(tasks);

  // RIMUOVERE TESTO DALL'INPUT UTENTE UNA VOLTA CLICCATO ADD
  clearInput.value = "";
});
