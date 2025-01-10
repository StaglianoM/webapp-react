import FilmCard from "../components/FilmCard";

function HomePage() {

    const film = {
        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "genre": "Science Fiction",
        "release_year": 2010,
        "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        "image": null,
        "created_at": "2024-11-29T10:40:13.000Z",
        "updated_at": "2024-11-29T10:40:13.000Z",
    }

    return <>
        <section>
            <div className="container">
                <h1>Films</h1>
                <h2>Anteprima</h2>
            </div>
        </section>
        <section>
            <div className="grid">
                <FilmCard films={film}></FilmCard>
                <FilmCard films={film}></FilmCard>
                <FilmCard films={film}></FilmCard>
                <FilmCard films={film}></FilmCard>
                <FilmCard films={film}></FilmCard>

            </div>
        </section>
    </>
}

export default HomePage;