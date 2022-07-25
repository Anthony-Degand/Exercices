document.getElementById("input01").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("result").innerHTML = Date();
  }

  

  document.getElementById("input02").addEventListener("click", conca);

  function conca() {
  let text01 = document.getElementById("text01").value;
  let text02 = document.getElementById("text02").value;

    document.getElementById("result02").innerHTML = `Je m'appelle ${text01} ${text02} et nous somme le ${new Date().toLocaleDateString()}`;
  }

 
//-----------------------------------------------------------------------

const mouseEvent = document.querySelector(".mouseEvent"); // déclarer variable de ma div
const horizontal = document.querySelector(".horizontal"); // de mes axes
const vertical = document.querySelector(".vertical"); //""

mouseEvent.addEventListener('mousemove', (e) => { // crée un écouteur avec une foction flécher 
  horizontal.innerHTML = e.x; // remplacer le html de mon span horizontal par l'axe x trouver dans l'"event"
  vertical.innerHTML = e.y; // remplacer le html de mon span vertical par l'axe y trouver dans l'"event" (console.log (event))
})