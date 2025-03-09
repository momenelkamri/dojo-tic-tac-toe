import { TicTacToe } from "../src/TicTacToe";

describe('TicTacToe', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
    });

    test('should initialize the board correctly', () => {
        const expectedBoard = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        expect(game['board']).toEqual(expectedBoard);
    });

    test('should allow a player to make a move', () => {
        game.play(0, 0);
        expect(game['board'][0][0]).toBe('X');
    });

    test('should switch players after a move', () => {
        game.play(0, 0);
        expect(game['currentPlayer']).toBe('O');
        game.play(1, 1);
        expect(game['currentPlayer']).toBe('X');
    });

    test('should update the board correctly after a move', () => {
        game.play(0, 0);
        game.play(1, 1);
        const expectedBoard = [
            ['X', ' ', ' '],
            [' ', 'O', ' '],
            [' ', ' ', ' ']
        ];
        expect(game['board']).toEqual(expectedBoard);
    });

    test('should prevent moves in occupied spaces', () => {
        game.play(0, 0);
        game.play(0, 0);
        const expectedBoard = [
            ['X', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        expect(game['board']).toEqual(expectedBoard);
    });

    test('should declare a winner when a player wins', () => {
        game.play(0, 0); // X
        game.play(1, 0); // O
        game.play(0, 1); // X
        game.play(1, 1); // O
        game.play(0, 2); // X wins
        expect(game['winner']).toBe('X');
    });
});