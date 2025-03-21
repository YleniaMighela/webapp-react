import { Link } from "react-router-dom"

export default function MovieListCard({ movieProp }) {


    // destrutto l'array di oggetti

    const { id, title, image, director, abstract, genre } = movieProp;

    return (


        <div>
            <h5 className="title_movie">{title}</h5>

            {image && <img src={image} alt={title} />}

            <span className="genre"><strong>Genere: {genre}</strong></span>

            <div className="container_text">
                <p>{abstract || "Contenuto non trovato"}</p>
                <address className="autor"><i>By {director || "Anonimo"}</i></address>

                <Link to={`movies/${id}`} className="details_movie">Dettagli</Link>
            </div>




        </div>


    );
}