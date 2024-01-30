import { GameLayout } from './components/GameLayout';
import { useState } from 'react';
// Все является иперативным стилем
export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<GameLayout
			field={field}
			setField={setField}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
		/>
	);
};
