let particles = [];


function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    //let p = new Particle();
    //particles.push(p)
}

function draw() {
    background(0,15);

    //fill(255, 255, 255);
    //ellipse(400, 400, 200);
    
    //workiing on mapping: x1 & y1
    //var x1 = map(mouseX, 0, window.innerWidth, 0, 5);
    var y1 = map(mouseY, 0, window.innerHeight, 20, 450)


    for(let j = 0; j < 5; j++){
        let p = new Particle();
        particles.push(p)
        p.show()

        for(let i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].show();
        }
        if(particles.length > y1){
            particles.shift()
        }
    }
    console.log(y1)


}

class Particle{

    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.vx = random(3, -3);
        this.vy = random(2, -2);

    }

    update(){
        this.x += this.vx
        this.y += this.vy
    }

    show(){
        stroke(255);
        fill(255, 150);
        ellipse(this.x, this.y, 16);
    }
}