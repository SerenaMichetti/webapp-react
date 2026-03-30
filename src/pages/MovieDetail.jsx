import { useEffect, useState } from "react"
import axios from "axios"
import ReviewCard from "../components/ReviewCard"
import { useParams } from "react-router-dom"

function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                console.log(res.data)
                , setMovie(res.data)
            })
            .catch(err => console.error(err.message))
    }, [id])

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
                movie.reviews?.map(reviewElement => <ReviewCard key={reviewElement.id} reviewParam={reviewElement}></ReviewCard>)
            }
        </div>
    </>
}

export default MovieDetail