/*Arraydiseños [];


Arraydiseños.forEach(element => {
    const dibujos = document.createElement(...);
    dibujos.innertext = el.nombre; //(nombre = nombre del diseño)//
    contenedorflex.appendChild(dibujos);
});*/




function crearcard(diseños){
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = "imagenes\diseno1.jpg"
    img.alt = "imagenuno"

    const boton = document.createElement("button");
    boton.innerText = "RESERVAR";
    boton.className = "botoncard";


    card.appendChild(img);
    card.appendChild(boton);
    contenedorflex.appendChild(card);
}

ArrayElementos.forEach(el => {
    crearcard(el);

});
