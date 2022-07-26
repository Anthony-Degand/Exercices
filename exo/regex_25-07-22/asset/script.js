let form = document.querySelector("#loginForm"); // form pour identifier mon formulaire au complet


//ecouter la modif de l'email

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
    let testEmail = emailRegExp.test(inputEmail.value); // crée une variable qui enregistre la contenue de mon input une fois tester par ma regex
    let small = inputEmail.nextElementSibling; // crée une variable small qui vaux l'élément juste au dessous de mon inputEmail 
    
    
    if (testEmail) { // si validez par ma regex
        small.innerHTML = 'Adresse Valide';
        small.classList.remove('test-danger'); // retirer couleur rouge
        small.classList.add('test-success'); // ajouter couleur vert
    }
    else { // si refuser par ma regex
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('test-success'); // retirer couleur vert
        small.classList.add('test-danger'); // ajouter couleur rouge
    }                                                                                                    
};                                                                                                      
                                                                                                        
                                                                                                        
                                                                                                        


