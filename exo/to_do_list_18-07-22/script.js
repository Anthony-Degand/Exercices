function ajouter() {

    entrer = $("#entrer").val();

    $('#bouton').click(function () {
        $('#list').append('<p class="element"></p>');
        $(".element").html(entrer);
    });
};




