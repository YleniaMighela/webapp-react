import MovieListCard from "../components/MovieListCard"

export default function HomePage() {


    return (

        <main>
            <h2> MOVIES</h2>
            <p> Sezione film in evidenza</p>
            {/* Listato */}
            <div>
                <MovieListCard />
                <MovieListCard />
                <MovieListCard />
                <MovieListCard />
            </div>
        </main>


    );
}