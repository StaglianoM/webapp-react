import { Link } from "react-router-dom";

function FilmCard({ film }) {
    const { id, title, director, abstract, image, avg_vote } = film;

    return (

        <article className="cardContainer">
            <img src="../../movies_cover/inception.jpg" alt="" />
            <div className="cardBody">
                <h3 className="title">
                    {title}
                </h3>
                <p className="director">
                    {director}
                </p>
                <p className="abstract">
                    {abstract}
                </p>
                <div className='ratings-vote'>
                    {avg_vote}
                </div>
                <Link className='readMore' to={`/films/${id}`}>Read More</Link>
            </div>
        </article >
    )
}

export default FilmCard;
