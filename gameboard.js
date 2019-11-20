class GameBoard {

  constructor() {
    this.board = [new Square, new Square, new Square,
                  new Square, new Square, new Square,
                  new Square, new Square, new Square]
    this.currentPlayer = 'X'
  }

  switchPlayer() {
    if (this.currentPlayer == 'X') {this.currentPlayer = 'O'}
    else {this.currentPlayer = 'X'}
  }

  makeAMove(squareID) {
    this.board[squareID].takeSquare(this.currentPlayer)
    this.switchPlayer()
  }



}
