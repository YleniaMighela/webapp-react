import { Link } from "react-router-dom"
// importo il componente moviecard
import MovieReviewCard from "../components/MovieReviewCard"

export default function DetailPageMovie() {


    return (

        <div>

            <div>
                <img src="http://localhost:3000/img/movies_cover/titanic.jpg" alt="" />
            </div>

            <h2> Titolo FIlm</h2>
            <span> Nome autore</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aspernatur?
                Ducimus possimus iste aliquam repellendus fugiat praesentium, velit deserunt
                veniam modi placeat doloribus, cumque harum odit, nam ullam quos? Aperiam.</p>

            <section>
                <h5>Recensioni</h5>
                <MovieReviewCard />
                <MovieReviewCard />
                <MovieReviewCard />
            </section>

            <Link to="/">Torna alla Home</Link>
        </div>


    );
}