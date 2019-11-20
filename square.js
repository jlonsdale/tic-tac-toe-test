class Square {

    constructor() {
      this.played = false;
    }

    takeSquare(player) {
      if(this.played==false) {
        this.player = player;
        this.played = true;
      }
      else {
        throw 'Error';
      }
    };

}
