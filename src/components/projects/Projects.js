import './Projects.css';
import project1 from '../../assets/project-1.png';
import project2 from '../../assets/project-2.png';

export default function Projects() {
    return (
        <div className="Projects">
            <div className="container col-xxl-9 text-white d-flex flex-column align-items-center justify-content-center" id="projects">
                <h2 style={{color: '#9fef00'}} className="text-center display-4 mt-3 fw-bold">
                    Projects
                </h2>
                <p className="lead fs-4 text-center">Some of my works that I'm proud of :</p>
                <div className="row row-cols-1 row-cols-lg-2 g-5 mt-1">
                    <div className="col">
                        <div className="card h-100">
                            <div className="zoom">
                                <img
                                    src={project1}
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body bg-dark">
                                <h5 className="card-title fw-bold" style={{color: '#17d9e0'}}>
                                    BYTES Online Store (HiFi Prototype)
                                </h5>
                                <p className="card-text text-white">
                                    A T-shirt online website store prototype which features simple
                                    login and signup with local storage as database and a cart
                                    system using DOM Manipulation, all using JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="zoom">
                                <img
                                    src={project2}
                                    className="card-img-top"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body bg-dark">
                                <h5 className="card-title fw-bold" style={{color: '#17d9e0'}}>
                                    My very first portfolio
                                </h5>
                                <p className="card-text text-white">
                                    ...of course! This is the application of what I'm learning in
                                    KodeGo bootcamp.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}