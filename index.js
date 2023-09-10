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

	function attack(x, y) {
		if (board[x][y] !== '0') {
			return true;
		} else return false;
	}

	function checkValidSpace(ship, [x, y]) {
		if (x <= 9 && x >= 0 && y + ship.length <= 9) return true;
		return false;
	}

	return { getBoard, setBoard, attack, checkValidSpace };
};

const Ship = (length) => {
	let hits = 0;
	function hit() {
		hits++;
	}
	function isSunk() {
		return hits === length;
	}
	return { length, isSunk, hits };
};

const Player = () => {
	const gameboard = Gameboard();
	let ships = [];
	for (let i = 1; i <= 5; i++) {
		ships.push(Ship(i));
	}

	let isPlayer1Turn = true;

	function attack(x, y) {
		if (isPlayer1Turn) {
			const result = player2.gameboard.attack(x, y);
			isPlayer1Turn = !result;
			return result;
		}
		const result = player1.gameboard.attack(x, y);
		isPlayer1Turn = result;
		return result;
	}

	function placeShip(ship, [x, y]) {
		if (gameboard.checkValidSpace(ship, [x, y])) {
			for (let i = y; i < ship.length + y; i++) {
				gameboard.setBoard(ship.length, x, i);
			}
		}
	}

	return { gameboard, placeShip, ships, attack };
};

let player1 = Player();
let player2 = Player();

player1.placeShip(player1.ships[3], [4, 3]);
console.log(player1.gameboard.getBoard());
console.log(player1.gameboard.attack(4, 7));
