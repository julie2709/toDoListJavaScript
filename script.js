const ulListeTache = document.querySelector(".listeTache");
const form = document.querySelector("form");

// Storage part
function storeList() {
  window.localStorage.todoList = ulListeTache.innerHTML;
}
function getTodo() {
  if (window.localStorage.todoList) {
    ulListeTache.innerHTM = window.localStorage.todoList;
  } else {
      ulListeTache.innerHTML = `<li>cliquer deu fois sur un todo pour la supprimer</li>`;
  }
}

getTodo();
//ajouter une tache dans le dom
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let tache = document.getElementById("tacheARealise").value;
  //   let liTache = document.createElement("li");
  //   liTache.textContent = tache;
  //     ulListeTache.appendChild(liTache);
  ulListeTache.innerHTML += `<li> ${tache} </li>`;
        storeList();
    tacheARealise.value = "";
   
});
//Suppression des tâches suite au clic
ulListeTache.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
      e.target.remove();
      storeList();
  } else {
    e.target.classList.add("checked");
  }
});
