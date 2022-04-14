class Bala {
    constructor(x, y){
        this.raio = 30;
        var options = {
            isStatic: true
        }
        this.corpo = Bodies.circle(x, y, this.raio, options);
        this.imagem = loadImage("./assets/cannonball.png");
        World.add(world, this.corpo);
    }

    mostrar(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER);
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
    }

    atirar(){
        Matter.Body.setStatic(this.corpo,false);
        Matter.Body.setVelocity(this.corpo,{
                        x:30,
                        y:-20,
        
        })
    }
}