function Game() {

  player = new Player();
  room = new Room();

  this.update = function() {
    player.update();
    room.update();
  }

  this.render = function() {
    translate(width / 2 - player.position.x, height / 2 - player.position.y);
    player.render();
    room.render();
  }


}
