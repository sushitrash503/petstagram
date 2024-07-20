$(document).ready(function() {
    $.getJSON('cards.json', function(data) {
        $.each(data, function(index, item) {
            // Crea una estructura HTML para cada tarjeta
            var storyHTML = `
            <div class="card">
                <div class="cards">
                    <div class="primerbloque">
                        <img src="${item.fotoperfil}" alt="${item.nombre}" class="fotoperfil">
                        <p class="nombreperfil">${item.nombre}</p>
                    </div>
                    <div class="segundobloque">
                        <img src="${item.foto}" class="fotopubli">                    
                    </div>
                    <div class="tercerobloque">
                        <svg class="icons">
                            <use xlink:href="#${item.iconos1}"></use>
                        </svg>
                        <svg class="icons">
                            <use xlink:href="#${item.iconos2}"></use>
                        </svg>
                    </div>
                    <div class="cuartobloque">
                        <p class="megusta">${item.megusta}</p>
                    </div>
                    <div class="quintobloque">
                        <p class="descripcion"><span class="nombre2">${item.nombre}</span>${item.descripcion}</p>   
                    </div>
                    <div class="comentarios">
                    <p>${item.comentarios}</p>
                    </div>
                </div>
            `;
            // Añade la tarjeta al contenedor
            $('#cards-container').append(storyHTML);
        });
    });
});
