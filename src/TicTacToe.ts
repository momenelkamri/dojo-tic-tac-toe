export class TicTacToe {
  private board: string[][];
  private currentPlayer: string;
  private winner: string | null;

  // This constructor initializes the board, currentPlayer, and winner
  constructor() {
    this.board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    this.currentPlayer = "X";
    this.winner = null;
  }

  // This method is used to print the board
  public printBoard() {
    console.log(this.board.map((row) => row.join(" | ")).join("\n---------\n"));
  }

  // This method is used to play the game
  public play(row: number, col: number) {
    // Check if the space is empty
    if (this.board[row][col] === " ") {
      // Update the board with the current player
      this.board[row][col] = this.currentPlayer;

      // Check if there is a winner
      this.checkWinner();

      // Switch players
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
  }

  // This method checks if there is a winner
  public checkWinner() {
    if (this.checkRows() || this.checkCols() || this.checkDiagonals()) {
      this.winner = this.currentPlayer;
      this.printWinner();
    }
  }

  // These methods check the rows, columns, and diagonals for a winner
  checkRows() {
    const b = this.board;

    for (let i = 0; i < 3; i++) {
      if (b[i][0] === b[i][1] && b[i][1] === b[i][2] && b[i][0] !== " ") {
        return true;
      }
    }
  }

  checkCols() {
    const b = this.board;

    for (let i = 0; i < 3; i++) {
      if (b[0][i] === b[1][i] && b[1][i] === b[2][i] && b[0][i] !== " ") {
        return true;
      }
    }
  }

  checkDiagonals() {
    const b = this.board;

    if (b[0][0] === b[1][1] && b[1][1] === b[2][2] && b[0][0] !== " ") {
      return true;
    }

    if (b[0][2] === b[1][1] && b[1][1] === b[2][0] && b[0][2] !== " ") {
      return true;
    }
  }

  public printWinner() {
    console.log(`${this.winner} wins!`);
  }
}
