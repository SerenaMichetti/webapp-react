import { Link } from "react-router-dom"

function MovieCard({ movieParam }) {


    return <div className="card movie-card">
        <img src={`http://localhost:3000/img/${movieParam.image}`} className="card-img-top" alt={movieParam.title} />
        <div className="card-body">
            <h3 className="card-title">{movieParam.title}</h3>
            <Link to={`/movies/${movieParam.id}`} className="btn btn-primary">Go to Details</Link>
        </div>
    </div>

}

export default MovieCard