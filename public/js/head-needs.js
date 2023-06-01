

// Aqui se renderiza el nav

document.addEventListener('DOMContentLoaded', function() {

    var headDiv = document.getElementsByTagName('head')[0];

    $.get('./views/head.html', function(data) {

        headDiv.appendChild(data);

    });

});

