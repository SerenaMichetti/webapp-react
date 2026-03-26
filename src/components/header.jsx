import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <Link to="/">HomePage</Link>
            <Link to="/movies/:id">Movies Details</Link>
            <Link to="/reviews/:id">Movie Reviews</Link>
        </header>
    )
}

export default Header