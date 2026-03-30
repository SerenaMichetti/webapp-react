import ReviewCard from "../components/ReviewCard"

function MovieDetail() {

    const movie = {

        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "genre": "Science Fiction",
        "release_year": 2010,
        "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        "image": "inception.jpg",
        "created_at": "2024-11-29T10:40:13.000Z",
        "updated_at": "2025-05-22T10:55:27.000Z",
        "reviews": [
            {
                "id": 1,
                "movie_id": 1,
                "name": "Alice",
                "vote": 5,
                "text": "A mind-bending masterpiece.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            },
            {
                "id": 2,
                "movie_id": 1,
                "name": "Bob",
                "vote": 4,
                "text": "Great visuals and a compelling story.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            },
            {
                "id": 3,
                "movie_id": 1,
                "name": "Charlie",
                "vote": 3,
                "text": "Confusing at times, but worth watching.",
                "created_at": "2024-11-29T10:40:13.000Z",
                "updated_at": "2024-11-29T10:40:13.000Z"
            }
        ]

    }

    return <>
        <div className="background-img">
            <h1>{`${movie.title} (${movie.release_year})`}</h1>
        </div>
        <div>
            <h3>Genre: {movie.genre}</h3>
            <h3>Director: {movie.director}</h3>
            <p>{movie.abstract}</p>
        </div>
        <div>
            <h3>Reviews</h3>
            {
               movie.reviews.map(reviewElement => <ReviewCard key={reviewElement.id} reviewParam={reviewElement}></ReviewCard>)
            }
        </div>
    </>
}

export default MovieDetail