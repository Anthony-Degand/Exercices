//https://www.freecodecamp.org/email-sign-up/?messages=success%5B0%5D%3Dflash.signin-success

function traiter()
{
	let leTexte = document.getElementById("lorem").innerHTML; // le texte ou les termes sont rechercher 
	let termes = document.getElementById("mots").value; // les termes son les mots tapé dans la barre de recherche

	leTexte = leTexte.split("<span style=\"color:blue;background-color:grey;border-radius:5px;\">").join(""); // purger le texte de la balise de style ouvrante
	leTexte = leTexte.split("</span>").join(""); // purger le texte de la balise de style fermante           (pour qu'une nouvelle recherche ne se méllange pas avec l'ancienne)

	if ( termes != ""){
		let expReg = new RegExp(termes, "ig");//rechercher tous les termes 
		let formeRplcmt = "<span style='color:blue;background-color:grey;border-radius:5px;'>" + termes + "</span>"; // leur attribué du css
		leTexte = leTexte.replace(expReg,formeRplcmt); // remplace dans le texte le terme selectionner par sa version stylisée
		document.getElementById("lorem").innerHTML = leTexte; // afficher les changements
	}

    if ( termes === "jimmy") {
        document.getElementById("lorem").innerHTML = "<a id='j' href='https://github.com/DecottigniesJimmy'>Clique ici !</a> <br><br> <a id='i' href='https://github.com/DecottigniesJimmy'>"
    }

}
