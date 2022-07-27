
//---------------------------------regExp--------------------------------------------------------------

let form = document.querySelector("#loginForm"); // form pour identifier mon formulaire au complet

// ************************************* Validation EMAIL ***********************************
//crée un écouteur sur l'e-mail

form.email.addEventListener("change", function () { // quand un changement est détecter dans mon input, lancer ma fonction validEmail
    validEmail(this);
});


const validEmail = function (inputEmail) {  // je crée ma fonction validEmail avec un argument inputEmail 

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
        return true; // retourne vrais ( serra utile pour le btn submit )
    }
    else { // si : refuser par ma regex
        small.innerHTML = 'Adresse Non Valide';
        small.classList.remove('test-success'); // retirer couleur vert
        small.classList.add('test-danger'); // ajouter couleur rouge
        return false; // retourne faux ( serra utile pour le btn submit )
    }
};
// *********************************Remplir date de naissance *************************************

/*ddn = document.getElementById('ddn');*/ // variable pour la date de naissance



// **************************************** Validation Mdp ****************************************

//crée un écouteur sur le mot de passe 

form.mdp.addEventListener('change', function () { // quand un changement est détecter dans mon input, lancer ma fonction validMdp
    validMdp(this);
});

const validMdp = function (inputMdp) {
    let msg; // initialiser une variable msg qui comportera le msg a afficher celon la condition
    let valid = false; // initialiser une variable valid a false le temps que les condition ne sont pas remplit 
    // au moins 3 caracteres
    if (inputMdp.value.length < 3) { // si le mdp contient moins de 3 caractéres
        msg = 'Le mot de passe doit contenir au moins 3 caracteres'; // afficher le message :
    }
    //  au moins 1 maj
    else if (!/[A-Z]/.test(inputMdp.value)) { // sinon, si : il n'y à pas de majuscule
        msg = 'Le mot de passe doit contenir au moins 1 majuscule'; // afficher le msg :
    }
    //au moins 1 min
    else if (!/[a-z]/.test(inputMdp.value)) { // sinon, si : il n'y à pas de minuscule
        msg = 'Le mot de passe doit contenir au moins 1 minuscule'; // afficher le msg :
    }
    //au moins 1 chiffre
    else if (!/[0-9]/.test(inputMdp.value)) { // sinon, si : il n'y à pas de chiffre
        msg = 'Le mot de passe doit contenir au moins 1 chiffre'; // afficher le msg :
    }
    // mot de passe valide
    else { // sinon
        msg = 'Le mot de passe est Valide';
        valid = true; // mon valide passe a true car toute les conditions sont remplit 
     }
    // ************************************ Afficher dans la page **************************************************

    // crée une variable small qui vaux l'élément juste au dessous de mon inputMdp

    let small = inputMdp.nextElementSibling;

    if (valid) { // si valider par mon regExp
        small.innerHTML = 'Mot de passe correct';
        small.classList.remove('test-danger'); // retirer couleur rouge
        small.classList.add('test-success');    // ajouter couleur verte
        return true; // retourne vrais ( serra utile pour le btn submit )
    }
    else { // si pas
        small.innerHTML = msg // afficher le message approprier
        small.classList.remove('test-success'); // retirer couleur verte
        small.classList.add('test-danger');    // ajouter couleur rouge
        return false; // retourne faux ( serra utile pour le btn submit )
    }
};
// ********************************* champs requis - valider formulaire *****************************************


form.addEventListener('submit', function (e) { // quand on valide le formulaire, lancer ma fonction validMdp

    e.preventDefault();// l'ors de la soumission du formulaire, ne pas engager l'événement de base ( ne pas envoyer les données )

   if (validEmail(form.email) && validMdp(form.mdp)) { // si mes champs son correct soumettre le formulaire
        form.submit();
   }
   
});

//***************************************** local storage *******************************************************                                                                                                       
//mettre le boutton submit dans une variable                                                                                                        
let btnEnvoyerFormulaire = document.querySelector('#connection');

//assigner mon bouton a un écouteur de click qui engage une fonction :
btnEnvoyerFormulaire.addEventListener("click", () => {
    //récupérer les données du formulaire
    //et
    //stocker les saisie dans le local Storage
    localStorage.setItem("email", document.querySelector("#email").value);
    localStorage.setItem("ddn", document.querySelector("#ddn").value);
    localStorage.setItem("mdp", document.querySelector("#mdp").value);

});