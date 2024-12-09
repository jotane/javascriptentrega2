/*Arraydiseños [];


Arraydiseños.forEach(element => {
    const dibujos = document.createElement(...);
    dibujos.innertext = el.nombre; //(nombre = nombre del diseño)//
    contenedorflex.appendChild(dibujos);
});*/

const container = document.getElementById("contenedorflex");

const arrayDiseños = [
    {
    id: 1,
    img: "imagenes\diseno1.jpg"
    },
    {   
    id: 2,
    img: "imagenes\diseno2.jpg"
    },
    {   
    id: 3,
    img: "imagenes\diseno3.jpg"
    },
    {
    id: 4,
    img: "imagenes\diseno4.jpg"
    },
    {
    id: 5,
    img: "imagenes\diseno5.jpg"
    },
    {
    id: 6,
    img: "imagenes\diseno6.jpg"
    },
    {
    id: 7,
    img: "imagenes\diseno7.jpg"
    },
    {
    id: 8,
    img: "imagenes\diseno8.jpg" 
    },
    {
    id: 9,
    img: "imagenes\diseno9.jpg"
    },
    {
    id: 10,
    img: "imagenes\diseno10.jpg"
    },
    {
    id: 11,
    img: "imagenes\diseno11.jpg"
    },
    {
    id: 12,
    img: "imagenes\diseno12.jpg" 
    },
    {
    id: 13,
    img: "imagenes\diseno13.jpg"
    },
    {
    id: 14,
    img: "imagenes\diseno14.jpg"
    },
    {
    id: 15,
    img: "imagenes\diseno15.jpg"
    },
    {
    id: 16,
    img: "imagenes\diseno16.jpg"
    },
    {
    id: 17,
    img: "imagenes\diseno17.jpg"
    },
    {
    id: 18,
    img: "imagenes\diseno18.jpg"
    },
];




function agregardiseño(diseños){
    alert(`Reservaste el diseño ${diseños.id}`);
};

function crearcard(diseños){
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = "imagenes\diseno1.jpg";
    img.alt = "imagenuno";

    const boton = document.createElement("button");
    boton.innerText = "RESERVAR";
    boton.className = "botoncard";
    boton.onclick = () => agregardiseño(diseños);


    card.appendChild(img);
    card.appendChild(boton);
    contenedorflex.appendChild(card);
};

arrayDiseños.forEach(el => {
    crearcard(el);//generar el array//

});

