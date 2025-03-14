// importo axios per effetuare le chiamate
import axios from 'axios'
import { useState } from "react";

export default function FormReview({ movie_id, reloadReview }) {

    // mi creo una variabile di stato (oggetto) assegnando ai campi del form dei valori inizialmente vuoti, dopodichè si andranno ad aggiornare con la variabile di stato dell'useState

    const initialFormData = {
        name: "",
        text: "",
        vote: 0
    };

    // utilizzo lo useState per la gestione delle informazioni raccolte dai campi del form, in cui formData è lo stato che contiene il valore, setformdata è la funzione che aggiorna lo stato
    const [formData, setFormData] = useState(initialFormData);

    // funzione che permette al setFielValue di ricevere un evento come parametro (l'evento sta nell'inserimento del dato da parte dell'utente e che al momento dell'onChange il valore di quel campo si aggiorna con il dato inserito) 

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        // la funzione (setformData) inquesto momento  prende tutti l'oggetto precedente (formaData), e al momento dell'onChange lo modifica con i nuovi dati inseriti
        setFormData({ ...formData, [name]: value });
    }



    // mi salvo in una costante l'endpoint su cui partirà la chiamata andando ad utilizzare le prop per passare l'id del film
    const urlEndpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // funzione di invio della richiesta al submite del form
    const submitReview = (e) => {
        e.preventDefault();

        axios.post(urlEndpoint, formData)
            .then(() => {
                setFormData(initialFormData)
                // vado a richiamare la prop che esegue la funzione del fetchMovie
                reloadReview()
            }

            )

            .catch(err => console.log(err))

    }


    return (
        <div >



            <div >
                <form onSubmit={submitReview}>
                    <div className='form_review'>

                        {/* nome */}
                        <div className='container_singleForm'>
                            <label>Inserisci il tuo nome</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={setFieldValue}
                                placeholder='Nome'
                            />

                        </div>

                        {/* recensione */}
                        <div className='container_singleForm'>
                            <label className='label_review'>Inserisci la tua recensione</label>
                            <textarea
                                name="text"
                                value={formData.text}
                                onChange={setFieldValue}
                                placeholder='Recensione'
                            >
                            </textarea>

                        </div>

                        {/* voto */}
                        <div className='container_singleForm'>
                            <label>Inserisci la tua valutazione</label>
                            <input
                                type="number"
                                name='vote'
                                value={formData.vote}
                                onChange={setFieldValue}

                            />
                        </div>

                        {/* bottone */}
                        <button type="submit" >
                            Invia la tua recensione
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}





