class Inimigo {
    constructor(posX, posY, lar, alt, inimigoPos){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.inimigoPos = inimigoPos;
        this.imagem = loadImage("./assets/boat.png");
        World.add(world, this.corpo);
    }
        remover(index){
            setTimeout(()=>{
                Matter.World.remove(world,matriznavio[index].corpo);
                 delete matriznavio[index] 
            },2000)
             
        }
    mostrar(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.imagem, 0, this.inimigoPos, this.lar, this.alt);
        pop();
    }
}