function Game() {

  player = new Player();
  room = new Room();
  cutscene = new Cutscene();
  enemyLoder = new enemyLoder();

  var cutscene_t = false;

  this.update = function() {
    player.update();
    enemyLoder.update();
    room.update();
  }

  this.render = function() {

    if(!cutscene_t) {
      translate(width / 2 - player.position.x, height / 2 - player.position.y);
    }else{

    }


    player.render();
    enemyLoder.render();
    room.render();
  }


}
