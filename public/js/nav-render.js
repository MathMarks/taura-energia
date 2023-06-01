
// Aqui se renderiza el nav

document.addEventListener('DOMContentLoaded', function() {

    var navDiv = document.getElementsByClassName('nav-section')[0];
    var htmlInNavDiv = navDiv.innerHTML;

    $.get('./views/nav.html', function(data) {

        navDiv.innerHTML = data + htmlInNavDiv;

    });

});

