export default function CreateNewMoviePage() {



    return (


        <section>
            <form >
                <div>

                    <label>Titolo:</label>
                    <input

                        name="title"
                        type="text"
                        placeholder='Inserisci titolo'

                    />
                </div>

                <div >

                    <label>Regista:</label>
                    <input

                        name="director"
                        type="text"
                        placeholder='Inserisci il regista'

                    />
                </div>

                <div >

                    <label>Genere:</label>
                    <input

                        name="genre"
                        type="text"
                        placeholder='Inserisci un genere'

                    />
                </div>



                <div >

                    <label>Immagine:</label>
                    <input
                        name="image"
                        type="file"

                    />
                </div>

                <div >

                    <label>Estratto:</label>
                    <textarea
                        name="abstract"
                        placeholder='Inserisci un estratto'
                    ></textarea>
                </div>

                <div >
                    <button type="submit">
                        Aggiungi film
                    </button>
                </div>
            </form>
        </section>



    );
}