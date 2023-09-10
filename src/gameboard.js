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

	function checkValidSpace(ship, [x, y]) {
		if (x <= 9 && x >= 0 && y + ship.length <= 9) return true;
		return false;
	}

	return { getBoard, setBoard, checkValidSpace };
};
