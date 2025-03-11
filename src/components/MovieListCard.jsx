import { Link } from "react-router-dom"

export default function MovieListCard() {


    return (


        <div >
            <img src="http://localhost:3000/img/movies_cover/titanic.jpg" alt="" />
            <div >
                <h5>Titanic</h5>
                <address><i>By nome autore</i></address>
                <p >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
                </p>


            </div>
            <Link to="/movies">Dettagli</Link>
        </div>


    );
}