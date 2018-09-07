function Player() {

  this.position = createVector(1000,1000);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);

  this.render = function() {
    push();

        fill(10,50,200);
        translate(this.position.x, this.position.y);
        var dir = createVector(mouseX - width / 2, mouseY - height / 2);
        rotate(dir.heading());
        rectMode(CENTER);
        rect(0, 0, 50, 50);

    pop();
  }


  this.update = function() {
    this.move();

  }



  this.move = function (key) {
        var newVelocity = createVector(0, 0);

        if (keyIsDown(87)) {
            newVelocity.y -= 5;
        }if (keyIsDown(83)) {
            newVelocity.y += 5;
        }if (keyIsDown(65)) {
            newVelocity.x -= 5;
        }if ( keyIsDown(68)) {
            newVelocity.x += 5;
        }

        newVelocity.add(this.acceleration);
        this.velocity.lerp(newVelocity, 0.25);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);


    }

}
