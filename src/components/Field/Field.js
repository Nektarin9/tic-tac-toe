import { FieldLavout } from './FieldLavout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	currentPlayer,
	setCurrentPlayer,
	setField,
	setIsDraw,
	setIsGameEnded,
	...props
}) => {
	function checkTheWinner() {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			let count = 0;
			for (let j = 0; j <= 2; j++) {
				if (field[WIN_PATTERNS[i][j]] === currentPlayer) {
					count = count + 1;
				}
			}
			if (count === 3) {
				return true;
			}
		}
	}
	function checkTheDraw() {
		let count = 0;
		for (let i = 0; i < field.length; i++) {
			if (field[i]) {
				count = count + 1;
			}
		}
		if (count === field.length) {
			return true;
		} else {
			return false;
		}
	}
	function checkTheResult() {
		if (checkTheWinner()) {
			if (currentPlayer === 'X') {
				setCurrentPlayer('X');
			} else {
				setCurrentPlayer('O');
			}
			setIsGameEnded(true);
		} else if (checkTheDraw()) {
			setIsDraw(true);
		}
	}
	function makeMove(event) {
		const { target } = event;
		if (target.closest) {
			if (!target.textContent) {
				let index = Number(target.attributes[1].value);
				let array = field;
				if (currentPlayer === 'X') {
					setCurrentPlayer('O');
				} else {
					setCurrentPlayer('X');
				}
				setField(() => {
					array = field;
					array[index] = currentPlayer;
					checkTheResult(field, currentPlayer, setIsGameEnded);
					return array;
				});
			}
		}
	}
	return <FieldLavout makeMove={makeMove} field={field}></FieldLavout>;
};

Field.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	setField: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
};
