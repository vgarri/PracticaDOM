
    console.log("hola");
    const body = document.querySelector("body")
    
    let div = document.createElement("div");
    let banner = document.createElement("banner");
    let divfotos = document.createElement("divfotos");
    let selector = document.createElement("select");

    

    body.appendChild(div);
    div.appendChild(banner);
    banner.appendChild(divfotos);


    var DOM_img_banner = document.createElement("img");
    DOM_img_banner.src = "./banner/1.jpg";
    var fotoViaje1 = document.createElement("img");
    fotoViaje1.src = "./viajes/viajes-1.jpg";
    var fotoViaje2 = document.createElement("img");
    fotoViaje2.src = "./viajes/viajes-2.jpg";
    var fotoViaje3 = document.createElement("img");
    fotoViaje3.src = "./viajes/viajes-3.jpg";

    var options = document.createElement("option");
    var options2 = document.createElement("option");
    
    let txt = document.createTextNode("Burgos");
    let txt2 = document.createTextNode("Madrid")
   
    document.querySelector("banner").appendChild(DOM_img_banner);
    document.querySelector("divfotos").appendChild(fotoViaje1);
    document.querySelector("divfotos").appendChild(fotoViaje2);
    document.querySelector("divfotos").appendChild(fotoViaje3);
    document.querySelector("banner2").appendChild(selector);
    document.querySelector("select").appendChild(options);
    document.querySelector("select").appendChild(options2);
    options.appendChild(txt);
    options2.appendChild(txt2);
    


// document.querySelector("button").addEventListener("click", function () {
// });