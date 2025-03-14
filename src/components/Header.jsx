// importo il componente dalla libreria di react-router
import { Link } from "react-router-dom"

export default function Header() {


    return (
        <header>

            <Link to="/"> <h1 id="title">BOOL MOVIES</h1></Link>

            <Link to="/movies/create"> Inserisci un film </Link>

        </header>


    );
}