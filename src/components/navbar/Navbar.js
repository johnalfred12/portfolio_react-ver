import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top fs-5" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#home">Alfred Alfonso</a>
                <button
                    className="navbar-toggler font-weight-bold text-white rounded"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span style={{color: '#9fef00'}} className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3" href="#heroSection">About</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3" href="#experienceSection">Experience</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3" href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}