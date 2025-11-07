const NP = 150;
let pelotas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    for(let i = 0; i < NP; i++){
        let nuevaPelota = new Pelota();
        pelotas[i] = nuevaPelota;
    }

}

function draw() {
    background(150);

    for(let i = 0; i < NP; i++){
        let nuevaPelota = new Pelota();
        pelotas[i].actualizar()
        pelotas[i].visualizar();
    }

}