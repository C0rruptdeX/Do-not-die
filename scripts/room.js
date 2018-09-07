function Room() {

  this.position = createVector(1000,1000);

  this.render = function() {
    push();
        fill(100,100,100);
        translate(this.position.x-500, this.position.y-320);
        rect(0, 0, 1000, 20);
    pop();

    push();
        fill(100,100,100);
        translate(this.position.x-500, this.position.y+300);
        rect(0, 0, 1000, 20);
    pop();
  }


  this.update = function() {


  }





}
