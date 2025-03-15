import axios from "axios";

// importo parte LInk del modulo react-router
import { useNavigate } from "react-router-dom"

// importiamo lo useState 
import { useState } from "react";

const initialData = {

    title: "",
    director: "",
    genre: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:3000/api/movies";

export default function CreateNewMoviePage() {


    // navigazione
    const navigate = useNavigate();

    // states iniziali
    const [formDataObj, setFormDataObj] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setFormDataObj({ ...formDataObj, image: e.target.files[0] });
        else setFormDataObj({ ...formDataObj, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post(endpointApi, formDataObj, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });
    }





    return (
        <>

            <section>
                <form onSubmit={handleSubmit} >
                    <div>

                        <label>Titolo:</label>
                        <input

                            name="title"
                            type="text"
                            placeholder='Inserisci titolo'
                            value={formDataObj.title}
                            onChange={setFieldValue}

                        />
                    </div>

                    <div >

                        <label>Regista:</label>
                        <input

                            name="director"
                            type="text"
                            placeholder='Inserisci il regista'
                            value={formDataObj.director}
                            onChange={setFieldValue}

                        />
                    </div>

                    <div >

                        <label>Genere:</label>
                        <input

                            name="genre"
                            type="text"
                            placeholder='Inserisci un genere'
                            value={formDataObj.genre}
                            onChange={setFieldValue}

                        />
                    </div>



                    <div >

                        <label>Immagine:</label>
                        <input
                            name="image"
                            type="file"
                            onChange={setFieldValue}
                        />
                    </div>

                    <div >

                        <label>Estratto:</label>
                        <textarea
                            name="abstract"
                            placeholder='Inserisci un estratto'
                            onChange={setFieldValue}
                        ></textarea>
                    </div>

                    <div >
                        <button type="submit">
                            Aggiungi film
                        </button>
                    </div>
                </form>
            </section>


        </>
    );
}