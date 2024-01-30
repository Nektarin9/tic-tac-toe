import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const Information = ({ isDraw, isGameEnded, currentPlayer, ...props }) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}
	return (
		<InformationLayout
			isDraw={isDraw}
			status={status}
			currentPlayer={currentPlayer}
		></InformationLayout>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
