// importo axios per effetuare le chiamate
import axios from 'axios'

// importo il componente
import { useState, useEffect } from "react";
import MovieListCard from "../components/MovieListCard"

export default function HomePage() {

    // setto la variabile si stato
    const [movies, setMovies] = useState([]);

    //funzione di gestione chiamata API per i FILM
    function fetchMovies() {

        axios.get("http://localhost:3000/api/movies")

            .then((res) => {
                setMovies(res.data);
                // console.log(res.data);


            })

            .catch(err => console.log(err));

    }


    useEffect(fetchMovies, [])


    // creo una funzione che mi permette di ciclare sul singolo film

    function renderMovies() {

        return movies.map(movie => {

            return (
                <div className="container_singleCard" key={movie.id}>
                    <MovieListCard movieProp={movie} />
                </div>

            )



        })
    }



    return (

        <main>
            <div>
                <section className="section_textMain">
                    <h2> MOVIES</h2>
                    <span className="evidence"> Film in evidenza</span>
                </section>



                {/* Listato */}
                <section className="section_listaCard">
                    {/* richiamo la funzione */}
                    {renderMovies()}
                </section>

            </div>

        </main>


    );
}