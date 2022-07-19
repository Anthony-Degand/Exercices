
    /*$('#bouton').click(function () { // fonction quand je clique sur ajouter
        newItem = $('.element').val();
        $('#list').append('<p class="element"></p>'); // crée un nouveau paragraphe
        entrer = $('#entrer').val(); 
        $(".element").html(entrer); // remplace le html du nouvelle element p par la valeur que j'entre dans la box de saisie
    });

    $('newItem').onclick(function () {
        $('newItem').remove();
    }) */

function addItem1() {
    var newItem = document.createElement("div"); // crée un elements div
    newItem.innerHTML = document.getElementById('box1').value; // remplacer son html par la valeur de ma box 
    document.getElementById('list').appendChild(newItem); // crée  une nouvelle div dans ma div "list"
    newItem.onclick = removeItem; // supprimer l'élément en cliquant dessus
    saveList();
}

function removeItem() {
    document.getElementById('list').removeChild(this); // supprime l'élément enfant cliquer
    saveList();
}

function savelist() {
    localStorage.test = document.getElementById("list").innerHTML;
}

function loadList() {
    document.getElementById("list").innerHTML = localStorage.test;
    for ( var i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem;
    }
}

if (localStorage.test) { // si local storage alors changer celui ci
    loadList();
    removeItem();  // permet de supprimer aprés actualisation ou fermeture de l'onglet
}