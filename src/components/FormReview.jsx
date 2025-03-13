import { useState } from "react";

export default function FormReview() {

    // mi creo una variabile di stato (oggetto) assegnando ai campi del form dei valori inizialmente vuoti, dopodichè si andranno ad aggiornare con la variabile di stato dell'useState

    const initialFormData = {
        name: "",
        text: "",
        vote: 1
    };

    // utilizzo lo useState per la gestione delle informazioni raccolte dai campi del form, in cui formData è lo stato che contiene il valore, setformdata è la funzione che aggiorna lo stato
    const [formData, setFormData] = useState(initialFormData);


    return (
        <div >

            <h5>Aggiungi la tua recensione</h5>

            <div >
                <form >
                    <div >
                        <label>Nome</label>
                        <input type="text" name="name" />
                    </div>
                    <div >
                        <label>Recensione</label>
                        <textarea name="text"></textarea>
                    </div>
                    <div >
                        <label>Voto</label>
                        <input type="number" name='vote' />
                    </div>
                    <div >
                        <button type="submit" >
                            Invia la tua recensione
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}





