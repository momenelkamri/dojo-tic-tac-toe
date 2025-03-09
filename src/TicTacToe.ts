export class TicTacToe {
    private board: string[][];
    private currentPlayer: string;
    private winner: string | null;

    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ]
        this.currentPlayer = 'X'
        this.winner = null
    }

    public printBoard() {
        console.log(this.board.map(row => row.join(' | ')).join('\n---------\n'))
    }

    public play(row: number, col: number) {
        if (this.board[row][col] === ' ') {
            this.board[row][col] = this.currentPlayer
            this.checkWinner()
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
        }
        
        if (this.winner !== null) {
            this.printWinner()
            console.log('Game over!')
        }
    }

    public checkWinner() {
        if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]) {
            this.winner = this.board[0][0]
        } else if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2]) {
            this.winner = this.board[1][0]
        } else if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2]) {
            this.winner = this.board[2][0]
        } else if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]) {
            this.winner = this.board[0][0]
        } else if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1]) {
            this.winner = this.board[0][1]
        } else if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]) {
            this.winner = this.board[0][2]
        }

        console.log('test ', this.winner)
    }

    public printWinner() {
        console.log(`${this.winner} wins!`)
    }
}

