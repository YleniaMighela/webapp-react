import MovieListCard from "../components/MovieListCard"

export default function HomePage() {


    return (

        <main>
            <div>
                <section className="section_textMain">
                    <h2> MOVIES</h2>
                    <span className="evidence"> Film in evidenza</span>
                </section>



                {/* Listato */}
                <section className="section_listaCard">
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />
                    <MovieListCard />
                </section>

            </div>

        </main>


    );
}