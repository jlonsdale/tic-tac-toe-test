class Game {

  constructor(gameBoard) {
    this.gameBoard = gameBoard
    this.gameOver = false
    this.winner = 'No Winner'
  }

  getSquareInfo(squareIndex) {
    return this.gameBoard.board[squareIndex].player
  }

  winnerCheck() {
    for (var i = 0; i <= 2; i++) {
      this.rowCheck(i)
      this.columnCheck(i)
    }
  }

  rowCheck(rowIndex) {
    var firstSquare = this.getSquareInfo(rowIndex*3)
    for (var i = 0; i <= 2; i++) {
      var currentSquare = this.getSquareInfo(rowIndex*3+i)
      if(currentSquare!=firstSquare||currentSquare==null) {
        return;
      }
    }
    this.gameOver = true;
    this.winner = 'Winner is "'+firstSquare+'"'
  }

  columnCheck(columnIndex) {
    var firstSquare = this.getSquareInfo(columnIndex)
    for (var i = 0; i <= 2; i++) {
      var currentSquare = this.getSquareInfo(columnIndex+3*i)
      if(currentSquare!=firstSquare||currentSquare==null) {
        return;
      }
    }
    this.gameOver = true;
    this.winner = 'Winner is "'+firstSquare+'"'
  }

}
