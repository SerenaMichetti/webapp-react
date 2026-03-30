import { Link } from "react-router-dom"

//importo il Link da react-router-dom per creare i link di navigazione tra le pagine dell'applicazione.
//  Il componente Header è un componente che restituisce un elemento header contenente tre link: uno per la HomePage,
//  uno per i dettagli dei film e uno per le recensioni dei film.
//  Ogni link utilizza il componente Link per specificare la destinazione della navigazione quando viene cliccato.
function Header() {

    return (
        <header >
            {/* navbar presa da bootstrap, con i link creati con il componente Link di react-router-dom */}
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><i className="fa-solid fa-film"></i>Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home Page</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
