const NP = 150;
let pelotas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    colorMode(HSB, 360, 225, 225);
    noStroke();

    for(let i = 0; i < NP; i++){
        pelotas.push(new Pelota);
    }

}

function draw() {
    background(0);

     for (let i = 0; i < pelotas.length; i++) {
        pelotas[i].actualizar();
        pelotas[i].visualizar();
    }

}