class Pelota {

    constructor(){
    
        this.diam = random(30, 170);
        this.rad = this.diam /2;

        this.posX = random(this.rad, width - this.rad);
        this.posY = random(this.rad, height - this.rad);

        this.velX = random(-5, 5);   
        this.velY = random(-5, 5);

        let colores = [
        color('#ff66b2'),
        color('#ff1493'),
        color('#ff33aa'),
        color('#ff99dd'),
        color('#ff66cc')
    ];
        this.nuevoColor = random(colores);
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
      noStroke();
      circle(this.posX, this.posY, this.diam);

    push()
    noStroke(); 
    
    let c = this.nuevoColor;
    fill(red(c) + 30, green(c) + 30, blue(c) + 30, 180);

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