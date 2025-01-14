import styles from './card.module.css';
import StarsRating from './starsRating';

function ReviewCard({ review }) {
    const { name, vote, text } = review;

    return (
        <div className={styles.containerCard}>
            <p className={styles.reviewText}>{text}</p>

            <div className={styles.flex}>
                <strong className={styles.voteLabel}>Voto:</strong>
                <StarsRating vote={vote} />
            </div>

            <div className={styles.author}>By {name}</div>
        </div>
    );
}

export default ReviewCard;
