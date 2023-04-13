let boton_inicio = document.querySelector("#boton_inicio");
let ingreso = document.querySelector("#ingreso");
let random = 0;
const mensajes = ["Su intuicion fue ACERTADA","El numero que buscas es menor","El numero que buscas es mayor"];

boton_inicio.addEventListener("click", () => {
    let card_inicial = document.querySelector("#card_inicial");
    card_inicial.classList.toggle("visually-hidden");
    let card_juego = document.querySelector("#card_juego");
    card_juego.classList.toggle("visually-hidden");
    do{
        random = Math.trunc(Math.random()*10);
    }while(random == 0);
})

ingreso.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    let valor_ingreso = document.querySelector("#input_ingreso");

    let adivinacion = () => {
        if(parseInt(valor_ingreso.value) === random){
            return 0;
        }
        if(parseInt(valor_ingreso.value) > random){
            return 1;
        }
        if(parseInt(valor_ingreso.value) < random){
            return 2;
        }
    }
    alert(mensajes[adivinacion()])
})



