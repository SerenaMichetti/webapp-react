import { Link } from "react-router-dom"

function MovieCard({ movie }) {
    return <div className="card movie-card">
        {/* <img src={movie.image} className="card-img-top" alt={movie.title} /> */}
        <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <Link to={`/movies/${movie.id}`} className="btn btn-primary">Go to Details</Link>
        </div>
    </div>
}

export default MovieCard