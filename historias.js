$(document).ready(function() {
    $.getJSON('historias.json', function(data) {
        $.each(data, function(index, item) {
            // Crea una estructura HTML para cada historia
            var storyHTML = `
                <div class="historia">
                    <img src="${item.foto}" alt="${item.nombre}">
                    <p>${item.nombre}</p>
                </div>
            `;
            // Añade la historia al contenedor
            $('#historias-container').append(storyHTML);
        });
    });
});
