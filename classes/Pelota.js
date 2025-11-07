class Pelota {

    constructor(){
    
        this.diam = random(30, 150);
        this.rad = this.diam /2;

        this.posX = random(this.rad, width - this.rad);
        this.posY = random(this.rad, height - this.rad);

        this.velX = random(-5, 5);   
        this.velY = random(-5, 5);

        this.nuevoColor = color(random(20, 400), random(100, 300), random(100, 300));
        this.formaInterna = random(['cuadrado', 'triangulo', 'circulo']);
    }

    actualizar(){

        if(this.posX > width - this.rad || this.posX < this.rad){  
            this.velX *= -1;  
        }
        
        if(this.posY > height - this.rad || this.posY < this.rad){    
            this.velY *= -1;
        }               
        
        this.posX += this.velX;
        this.posY += this.velY;
    } 

    visualizar(){
    
        fill(this.nuevoColor);
        stroke(50, 30, 100);
        strokeWeight(2);
        circle(this.posX, this.posY, this.diam);

    push()
    noStroke(); 
    
    let hueOriginal = hue(this.nuevoColor);
    let hueComplementario = (hueOriginal + 180) % 360;
    fill(hueComplementario, 120, 225);

    let tamInterno = this.diam * 0.5;

    if (this.formaInterna === 'cuadrado') {
      rect(this.posX, this.posY, tamInterno, tamInterno);
    }
    else if (this.formaInterna === 'triangulo') {
      triangle(
        this.posX, this.posY - tamInterno / 2,
        this.posX - tamInterno / 2, this.posY + tamInterno / 2,
        this.posX + tamInterno / 2, this.posY + tamInterno / 2
      );
    } 
    else if (this.formaInterna === 'circulo') {
      circle(this.posX, this.posY, tamInterno);
    }

    pop();
    }
}