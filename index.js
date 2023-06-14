function createBoard() {
	let board = [];
	for (let i = 0; i < 10; i++) {
		board[i] = [];
		for (let j = 0; j < 10; j++) {
			board[i][j] = `0`;
		}
	}
	return board;
}

const Gameboard = () => {
	let board = createBoard();

	function setBoard(length, x, y) {
		board[x][y] = length;
	}

	function getBoard() {
		return board;
	}

	function checkValidSpace(ship, [x, y]) {}

	return { getBoard, setBoard, checkValidSpace };
};

const Ship = (length) => {
	let hits = 0;
	function hit() {
		hits++;
	}
	function isSunk() {
		if (hits === length) return true;
		else return false;
	}
	return { length, isSunk, hits };
};

const Player = () => {
	const gameboard = Gameboard();
	let ships = [];
	for (let i = 1; i <= 5; i++) {
		ships.push(Ship(i));
	}

	function placeShip(ship, [x, y]) {
		if (gameboard.checkValidSpace(ship, [x, y])) {
			for (let i = y; i < ship.length + y; i++) {
				gameboard.setBoard(ship.length, x, i);
			}
		}
	}

	return { gameboard, placeShip, ships };
};

let player1 = Player();
let player2 = Player();

// player1.gameboard.placeShip(player1.ship1, [0, 0]);
player1.placeShip(player1.ships[0], [1, 1]);
