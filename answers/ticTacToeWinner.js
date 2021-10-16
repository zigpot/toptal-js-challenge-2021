    box.ticTacToeWinner = function ticTacToeWinner(x) {
    // x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix
    // return 'x', 'o', or 'draw'
    // (ex. x=[["x", "o", "x"], ["o", "x", "o"], ["o", "o", "x"]], 
    // you should return 'x' because 'x' player is the winner)
    var player = {
    "x": false,
    "o": false};

    if (x[0][0] == x[0][1] && x[0][2] == x[0][1]) player[x[0][0]] = true
    if (x[1][0] == x[1][1] && x[1][2] == x[1][1]) player[x[1][0]] = true
    if (x[2][0] == x[2][1] && x[2][2] == x[2][1]) player[x[2][0]] = true

    if (x[0][0] == x[1][0] && x[2][0] == x[1][0]) player[x[0][0]] = true
    if (x[0][1] == x[1][1] && x[2][1] == x[1][1]) player[x[0][1]] = true
    if (x[0][2] == x[1][2] && x[2][2] == x[1][2]) player[x[0][2]] = true

    if (x[0][0] == x[1][1] && x[2][2] == x[1][1]) player[x[0][0]] = true
    if (x[0][2] == x[1][1] && x[1][1] == x[2][0]) player[x[2][0]] = true


    if(player["x"] == player["o"]){
      if (player["x"]){
        return "error"
      }
      else {
        return "draw"
      }
    }
    if (player["x"]) return "x"
    return "o"
  };