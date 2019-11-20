$(document).ready(function(){

  var gameBoard = new GameBoard()
  var game = new Game(gameBoard)
  updateBoard()

  function updateBoard() {
    if(game.gameOver==true) {
      $('#winner').text('Game over! '+game.winner);
      $('#board').hide()
    }
    $('#whosmove').text('It is currently "'+gameBoard.currentPlayer+'" Players Move!');
    gameBoard.board.forEach(function(item,index) {
      $('#'+index).text(item.player);
    });
  };

  $('.grid-item').click(function() {
    gameBoard.makeAMove(this.id)
    game.winnerCheck()
    updateBoard()
  });
});
