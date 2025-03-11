// importo il componente dalla libreria di react-router
import { Link } from "react-router-dom"

export default function Header() {


    return (
        <header>

            <div>
                <Link to="/"> BOOL MOVIES</Link>
            </div>

        </header>


    );
}