// importo axios per effetuare le chiamate
import axios from 'axios'

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
// importo il componente moviecard
import MovieReviewCard from "../components/MovieReviewCard"


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












    return (
        <>

            <div >
                <section className="container_singleDetail">

                    <img className="img_detail"
                        src={movie.image} alt={movie.title} />

                    <div className="container_textDetail">
                        <h2> {movie.title}</h2>

                        <span> {movie.director}</span>
                        <p>{movie.abstract}</p>
                    </div>




                    <section  >
                        <h5 className="review">Recensioni</h5>
                        <div className="container_textReview" >
                            {/* richiamo la funzione */}
                            {renderReviews()}


                        </div>
                        <Link to="/">Torna alla Home</Link>
                    </section>
                </section>
            </div>

        </>
    );
}