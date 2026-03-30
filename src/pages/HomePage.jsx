import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import axios from "axios"

function HomePage() {

    // JS 


    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies")
            .then(res => {
                console.log(res.data)
                    , setMovies(res.data)
            })
            .catch(err => console.error(err.message))
    }, [])

    // HTML 
    return <>
        <h1>Welcome to the best movie app</h1>
        <p>All movies </p>
        <div className="d-flex flex-wrap gap-3 ">
            {
                movies.map(movieElement => <MovieCard key={movieElement.id} movieParam={movieElement} />)
            }
        </div>

    </>
}

export default HomePage