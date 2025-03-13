

export default function FormReview({ }) {


    return (
        <div >

            <h5>Add your review</h5>

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
                        <input type="number" />
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





