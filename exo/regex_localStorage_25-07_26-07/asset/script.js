
//---------------------------------regExp--------------------------------------------------------------

let form = document.querySelector("#loginForm"); // form pour identifier mon formulaire au complet


//crée un écouteur sur l'e-mail

form.email.addEventListener("change", function (){ // quand un changement est détecter dans mon input, lancer ma fonction validEmail
    validEmail(this);
});


const validEmail = function (inputEmail){  // je crée ma fonction validEmail avec un argument inputEmail 
    
    //Creation de la regExp pour la validation email                                                   // le ^ pour indiquer le début de ma regExp
    let emailRegExp = new RegExp('^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');       // je peut mettre des lettres de A à Z en minuscule ou en majuscule ou des numéros  
                                                                                                        // de 0 a neuf ou les charactére ".-_" suivis obligatoirement du sigle @ en 1 exemplaire
                                                                                                        // suivi de lettres de A à Z en min ou maj et des chiffre entre 0/9 et des ".-_"
                                                                                                        // suivi d'un point en 1 exemplaire suivi de lettres de A à Z en minuscule (entre deux et dix lettres)
                                                                                                         // le $ pour indiquer la fin de ma regExp
    
    let testEmail = emailRegExp.test(inputEmail.value); // crée une variable qui enregistre le contenue de mon input une fois tester par ma regex
    let small = inputEmail.nextElementSibling; // crée une variable small qui vaux l'élément juste au dessous de mon inputEmail 
    
    if (testEmail) { // si : validez par ma regex
        small.innerHTML = 'Adresse Valide';
        small.classList.remove('test-danger'); // retirer couleur rouge
        small.classList.add('test-success'); // ajouter couleur verte
        
    }
    else { // si : refuser par ma regex
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('test-success'); // retirer couleur vert
        small.classList.add('test-danger'); // ajouter couleur rouge
    }                                                                                                    
};                                                                                                      

//crée un écouteur sur le mot de passe 

form.mdp.addEventListener('change', function () { // quand un changement est détecter dans mon input, lancer ma fonction validMdp
    validMdp(this);
});

const validMdp = function (inputMdp) {
    //creation de la regExp pour la validation du mot de passe

    let mdpRegExp = new RegExp('^[A-Z]+[a-zA-Z0-9.-_]+[0-9]$','g');

    // crée une variable qui enregistre le contenu de mon input une fois tester par ma regExp
    let testMdp = mdpRegExp.test(inputMdp.value);
    // crée une variable small qui vaux l'élément juste au dessous de mon inputMdp
    let small = inputMdp.nextElementSibling;

    if (testMdp) { // si validez par mon regExp
        small.innerHTML = 'mot de passe correct';
        small.classList.remove('test-danger'); // retirer couleur rouge
        small.classList.add('test-success');    // ajouter couleur verte
    }
    else {
        small.innerHTML = 'Le mot de passe doit commencer par une majuscule et terminer par un chiffre.';
        small.classList.remove('test-success'); // retirer couleur verte
        small.classList.add('test-danger');    // ajouter couleur rouge
    }
};
//----------------------------------------local storage-------------------------------------------------                                                                                                        
//mettre le boutton submit dans une variable                                                                                                        
let btnEnvoyerFormulaire = document.querySelector('#connection');

//assigner mon bouton a un écouteur de click qui engage une fonction :
btnEnvoyerFormulaire.addEventListener("click", () => {
//récupérer les données du formulaire
                //et
//stocker les saisie dans le local Storage
localStorage.setItem("email",document.querySelector("#email").value);
localStorage.setItem("ddn",document.querySelector("#ddn").value);
localStorage.setItem("mdp",document.querySelector("#mdp").value);

});