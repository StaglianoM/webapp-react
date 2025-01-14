import styles from './FilmPage.module.css';
import ReviewCard from '../../components/ReviewCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StarsRating from '../../components/starsRating';


function FilmPage() {
    const [film, setFilm] = useState(null);
    const { id } = useParams();

    function fetchFilm() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
            .then(res => {
                const movieData = res.data;

                // Aggiungi l'immagine dal percorso statico basato sul titolo
                const formattedTitle = movieData.title.toLowerCase().replace(/ /g, '_'); // Rimuove spazi e formatta il titolo
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
                    <div className={styles.container}>
                        <div className={styles.form}>
                            <div>
                                <strong>
                                    Aggiungi Recensione
                                </strong>
                            </div>

                            <div>
                                <form className={styles.reviewForm}>
                                    <div className={styles.flex}>
                                        <label htmlFor="name">Nome</label>
                                        <input type="text" placeholder="anonymous" name="name" id="name" />
                                    </div>

                                    <div>
                                        <label htmlFor="text">Recensione</label>
                                        <textarea name="text" id="text" placeholder="Scrivi la tua recensione"></textarea>
                                    </div>

                                    <div>
                                        <label htmlFor="vote">Voto</label>
                                        <select name="vote" id="vote">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <button type="submit">Invia</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        ) : (
            <div>Loading...</div>
        )
    );
}

export default FilmPage;