import { Link } from "react-router-dom";

function FilmCard({ film }) {
    const { id, title, director, abstract, avg_vote } = film;

    const imagePath = `/img/movies_cover/${title.toLowerCase().replace(/ /g, '_')}.jpg`;

    return (
        <article className="cardContainer">
            <img src={imagePath} alt={`Cover of ${title}`} className="filmImage" />

            <div className="cardBody">
                <h3 className="title">{title}</h3>

                <p className="director">{director}</p>

                <p className="abstract">{abstract}</p>

                <div className="ratings-vote">{`Rating: ${avg_vote}`}</div>

                <Link className="readMore" to={`/films/${id}`}>
                    Read More
                </Link>
            </div>
        </article>
    );
}

export default FilmCard;
