

export default function MovieReviewCard({ reviewProp }) {

    // destrutto l'array di oggetti
    const { name, text, vote } = reviewProp;


    return (



        <div className="container_singleReview">

            <p>{text || "Testo non trovato"}</p>

            <strong> Vote: {vote}</strong>

            <address> Da {name}</address>


        </div>




    );
}