let particles = [];
let vx1, vx2, vy1, vy2, d = 1;


function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");

    //already used in draw()
    //let p = new Particle();
    //particles.push(p)
}

function draw() {
    background(0,25);

    
    vx1 = random(5, 2)
    vx2 = random(-5, -2)
    vy1 = random(5, 2)
    vy2 = random(-5, -2)
    

    //fill(255, 255, 255);
    //ellipse(400, 400, 200);
    
    //workiing on mapping: x1 & y1
    //var x1 = map(mouseX, 0, window.innerWidth, 0, 5);
    var y1 = map(mouseY, 0, window.innerHeight, 20, 400)


    for(let j = 0; j < 5; j++){
        let p = new Particle();
        particles.push(p)
        p.show()

        for(let i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].show();
        }
        if(particles.length > y1){
            for(let k = 0; k < 5; k++){
                particles.shift()
            }
            
        }
    }
    console.log(y1)


}

class Particle{

    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.vx = random(vx1, vx2);//3, -3
        this.vy = random(vy1, vy2);//2, -2

        
    }

    update(){
        this.x += this.vx
        this.y += this.vy
        
    }

    show(){
        noStroke()

        

        fill(255, 150);
        ellipse(this.x, this.y, d);

        ///*
        fill(255, 0, 0, 50);
        ellipse(this.x - d, this.y, d);


        fill(0, 0, 255, 50);
        ellipse(this.x + d, this.y, d);
        //*/
    }
}