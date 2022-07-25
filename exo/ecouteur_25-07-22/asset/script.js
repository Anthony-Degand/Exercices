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

 
