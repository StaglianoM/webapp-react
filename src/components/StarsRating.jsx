import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarSolid } from '@heroicons/react/solid';
import styles from './card.module.css';

function StarsRating({ vote = 0 }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className={styles.flex}>
            {stars.map((n) => (
                n <= vote ? (
                    <StarSolid key={n} className={styles.StarIcon} style={{ width: 20 }} />
                ) : (
                    <StarIcon key={n} className={styles.StarIcon} style={{ width: 20 }} />
                )
            ))}
        </div>
    );
}

export default StarsRating;
