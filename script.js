
console.log("hola");

let imagenes = [  // Array para introducir imagenes
'viajes/viajes-1.jpg', 
'viajes/viajes-2.jpg', 
'viajes/viajes-3.jpg',

];
let textoParrafo = [
    "Este es el texto del párrafo 1", 
    "Este es el texto del párrafo 2", 
    "Este es el texto del párrafo 3"
];
let destinos = [
    'Burgos',
    'Madrid',
    'Mallorca',
    'La Palma',
    'Tenerife'
    ];
var DOM_img_banner = document.createElement("img");
    DOM_img_banner.src = "./banner/1.jpg";
    document.querySelector("banner").appendChild(DOM_img_banner);
for (let i=0; i< 3; i++){
    const img = document.createElement('img');
    img.src = imagenes[i];
    document.querySelector("divfotos").appendChild(img); 
    img.id = `img-${i+1}`;
    const parrafos = document.createElement('h4');
    document.querySelector("divtexto").appendChild(parrafos);
    parrafos.id = `h4-${i+1}`;
    const textop= document.createTextNode(textoParrafo[i]);
    document.querySelector("divtexto").appendChild(textop);
    
};


//selector


let selector = document.createElement("select");
document.querySelector("banner2").appendChild(selector);
for (let j = 0; j< destinos.length; j++) {
    
    let options = document.createElement("option");
    document.querySelector("select").appendChild(options);
    let txt = document.createTextNode(destinos[j]);
    options.appendChild(txt);
};
