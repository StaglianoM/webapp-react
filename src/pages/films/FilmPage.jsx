import styles from './FilmPage.module.css';
import ReviewCard from '../../components/ReviewCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarsRating from '../../components/starsRating';
import FormReview from '../../components/FormReview';


function FilmPage() {
    const [film, setFilm] = useState(null);
    const { id } = useParams();

    function fetchFilm() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
            .then(res => {
                const movieData = res.data;

                const formattedTitle = movieData.title.toLowerCase().replace(/ /g, '_');
                movieData.image = `/img/movies_cover/${formattedTitle}.jpg`;

                setFilm(movieData);
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        fetchFilm();
    }, [id]);

    return (
        film ? (
            <>
                <section className={styles.sectionContainer}>
                    <div className={styles.containerPage}>
                        <div>
                            <img src={film.image} alt={film.title} onError={(e) => {
                                e.target.src = '/img/default_cover.jpg';
                            }} />
                        </div>
                        <h1>{film.title}</h1>
                        <div>{film.director}</div>
                        <p>{film.abstract}</p>
                    </div>
                </section>

                <section>
                    <div className={styles.review}>
                        <h2>Recensioni</h2>
                        <div>
                            <div className={styles.flexStars}>
                                Media: <StarsRating vote={film.avg_vote} />
                            </div>
                        </div>
                    </div>

                    {film.reviews.length ? (
                        <ul className={styles.containerReviews}>
                            {film.reviews.map(review => (
                                <ReviewCard review={review} key={review.id} />
                            ))}
                        </ul>
                    ) : (
                        <div>Nessuna Recensione</div>
                    )}
                    <FormReview id={id} onSuccess={fetchFilm} />
                </section>
            </>
        ) : (
            <div>Loading...</div>
        )
    );
}

export default FilmPage;


