// importo axios per effetuare le chiamate
import axios from 'axios'

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
// importo il componente moviecard
import MovieReviewCard from "../components/MovieReviewCard"
import FormReview from "../components/FormReview"



export default function DetailPageMovie() {

    // recupero l'id del film
    const { id } = useParams();

    const redirect = useNavigate();

    // setto la variabile si stato
    const [movie, setMovie] = useState({});


    //funzione di gestione chiamata verso la rottaSHow
    function fetchMovie() {

        axios.get(`http://localhost:3000/api/movies/${id}`)

            .then((res) => {
                setMovie(res.data);
                // console.log(res.data);


            })

            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            })

    }


    useEffect(fetchMovie, []);

    // creo una funzione che mi permette di ciclare sulla recensione
    function renderReviews() {

        return movie.reviews?.map(
            review =>
                <MovieReviewCard key={review.id}
                    reviewProp={review} />)
    }



    // RITORNO DELLE VARIE FUNZIONI CREATE SOPRA
    return (
        <>

            <div >
                {/* sezione DETTAGLIO FILM */}
                <section className="container_singleDetail">

                    {movie.image && <img className="img_detail"
                        src={movie.image} alt={movie.title} />}

                    <div className="container_textDetail">
                        <h2> {movie.title}</h2>

                        <span> {movie.director}</span>
                        <p>{movie.abstract || "Contenuto non trovato"}</p>
                    </div>
                </section>


                {/* sezione RECENSIONI */}
                <section className='section_review' >
                    <h5 className="review">Recensioni</h5>
                    <div className="container_textReview" >
                        {/* richiamo la funzione */}
                        {renderReviews()}
                    </div>
                </section>


                {/* sezione FORM */}
                <section className="section_form" >
                    <h5>Aggiungi la tua recensione</h5>
                    {/* la props relativa al fetchMovie fa si che lo stato di movie si aggiorna ogni volta inserito un nuovo valore(recensione) */}
                    <FormReview movie_id={movie.id} reloadReview={fetchMovie} />
                </section>

                <Link to="/">Torna alla Home</Link>

            </div>

        </>
    );
}