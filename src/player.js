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
