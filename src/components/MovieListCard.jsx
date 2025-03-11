import { Link } from "react-router-dom"

export default function MovieListCard() {


    return (


        <div className="container_singleCard">
            <h5 className="title_movie">Titanic</h5>

            <img src="http://localhost:3000/img/movies_cover/titanic.jpg" alt="" />
            <address className="autor"><i>By nome autore</i></address>

            <div className="container_text">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
                </p>

                <Link to="/movies" className="details_movie">Dettagli</Link>
            </div>




        </div>


    );
}