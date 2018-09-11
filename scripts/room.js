function Room() {

  this.position = createVector(1000,1000);

  this.render = function() {
    push();
        fill(100,100,100);
        translate(this.position.x-600, this.position.y-370);
        rect(0, 0, 1200, 20);
    pop();

    push();
        fill(100,100,100);
        translate(this.position.x-600, this.position.y+350);
        rect(0, 0, 1200, 20);
    pop();

    push();
        fill(100,100,100);
        translate(this.position.x-601, this.position.y-370);
        rect(0, 0, 20, 740);
    pop();

    push();
        fill(100,100,100);
        translate(this.position.x+599, this.position.y-370);
        rect(0, 0, 20, 740);
    pop();
  }


  this.update = function() {

    if(player.position.x - 25 < 419) {
      player.position.x = 444;
    }
    if(player.position.x + 25 > 1599) {
      player.position.x = 1574;
    }
    if(player.position.y - 25 < 650) {
      player.position.y = 675;
    }
    if(player.position.y + 25 > 1350) {
      player.position.y = 1325;
    }

  }





}
