import styles from './GameLayout.module.css';
import { Field } from './Field/Field';
import { Information } from './Information/Information';
export const GameLayout = ({ ...props }) => {
	const reset = () => {
		const { setCurrentPlayer, setIsGameEnded, setIsDraw, setField } = props;
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};
	return (
		<section className={styles.GameLayoutHeader}>
			<div>
				<Information {...props}></Information>
				<div className={styles.GameLayoutContainerField}>
					<Field {...props}></Field>
				</div>
				<button onClick={reset} className={styles.GameLayoutBtn}>
					Начать заново
				</button>
			</div>
		</section>
	);
};
