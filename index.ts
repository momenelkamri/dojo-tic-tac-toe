import { TicTacToe } from "./src/TicTacToe";

const game = new TicTacToe();
game.play(0, 0);
game.printBoard();
game.play(1, 0);
game.printBoard();
game.play(0, 1);
game.printBoard();
game.play(1, 1);
game.printBoard();
game.play(0, 2);
game.printBoard();
