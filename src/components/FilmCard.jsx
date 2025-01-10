import { Link } from "react-router-dom";

function FilmCard({ films }) {
    const { id, title, director, image } = films;

    return (

        <div className="cardContainer">
            <img src="" alt="" />
            <div>
                {title}
            </div>
            <Link to={`/films/${id}`}>Test</Link>
        </div>
    )
}

export default FilmCard;
