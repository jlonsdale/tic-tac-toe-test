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
    this.diagonalCheck(0,4)
    this.diagonalCheck(2,2)
    for (var i = 0; i <= 2; i++) {
      this.rowCheck(i)
      this.columnCheck(i)
    }
    this.fullCheck()
  }

  fullCheck() {
    for (var i = 0; i <=8; i++) {
      var currentSquare = this.getSquareInfo(i);
      if(currentSquare==null) {
        return;
      }
    };
    this.gameOver = true;
  };

  diagonalCheck(start,difference) {
    var firstSquare = this.getSquareInfo(start)
      for (var i = start; i <=(start+2*difference); i+=difference) {
        var currentSquare = this.getSquareInfo(i)
        if(currentSquare!=firstSquare||currentSquare==null) {
          return;
        }
      };
    this.gameOver = true;
    this.winner = 'Winner is "'+firstSquare+'"';
  };


  rowCheck(rowIndex) {
    var firstSquare = this.getSquareInfo(rowIndex*3)
    for (var i = 0; i <= 2; i++) {
      var currentSquare = this.getSquareInfo(rowIndex*3+i)
      if(currentSquare!=firstSquare||currentSquare==null) {
        return;
      }
    }
    this.gameOver = true;
    this.winner = 'Winner is "'+firstSquare+'"';
  };

  columnCheck(columnIndex) {
    var firstSquare = this.getSquareInfo(columnIndex)
    for (var i = 0; i <= 2; i++) {
      var currentSquare = this.getSquareInfo(columnIndex+3*i)
      if(currentSquare!=firstSquare||currentSquare==null) {
        return;
      }
    };
    this.gameOver = true;
    this.winner = 'Winner is "'+firstSquare+'"';
  };

}
