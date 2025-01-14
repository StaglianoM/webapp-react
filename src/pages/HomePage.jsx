import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";

function HomePage() {

    const [films, setFilms] = useState([])
    const [search, setSearch] = useState('')

    function fetchFilms() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`, {
            params: {
                search: search
            }
        })
            .then(response => {
                setFilms(response.data)
            })
            .catch(err => {
                console.error(err);
            });
    }

    function searchFilms(e) {
        e.preventDefault()

        fetchFilms()
    }


    useEffect(() => {
        fetchFilms();
    }, []);


    return <>
        <section>
            <div className="container">
                <div className="titles">
                    <h1>Films</h1>
                    <h2>Anteprima</h2>
                </div>
                <form className="searchButton" onSubmit={searchFilms}>
                    <input type="text" placeholder="Cerca Film"
                        value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button>Cerca</button>
                </form>
            </div>
        </section>
        <section>
            <div className="grid">
                {
                    films.map(film => {
                        return <FilmCard key={film.id} film={film}></FilmCard>
                    })
                }

            </div>
        </section>
    </>
}

export default HomePage;