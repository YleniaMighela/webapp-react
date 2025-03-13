// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>

            <div>
                <h2>Pagina non trovata</h2>
                <Link to="/"> Torna alla home</Link>
            </div>
        </>
    )
}

