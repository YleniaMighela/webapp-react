import { Link } from "react-router-dom"
// importo il componente moviecard
import MovieReviewCard from "../components/MovieReviewCard"

export default function DetailPageMovie() {


    return (

        <div >
            <section className="container_singleDetail">

                <img className="img_detail" src="http://localhost:3000/img/movies_cover/titanic.jpg" alt="" />

                <div className="container_textDetail">
                    <h2> Titolo FIlm</h2>

                    <span> Nome autore</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aspernatur?
                        Ducimus possimus iste aliquam repellendus fugiat praesentium, velit deserunt
                        veniam modi placeat doloribus, cumque harum odit, nam ullam quos</p>



                </div>


            </section>

            <section  >
                <h5 className="review">Recensioni</h5>
                <div className="container_textReview" >
                    <MovieReviewCard />
                    <MovieReviewCard />
                    <MovieReviewCard />


                </div>
                <Link to="/">Torna alla Home</Link>
            </section>

        </div>


    );
}