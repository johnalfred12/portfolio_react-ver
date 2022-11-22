import './Skills.css';

export default function Skills() {
    return (
        <div className="Skills">
            <div
                className="container col-xxl-9 text-white d-flex flex-column align-items-center" id="experienceSection">
                <h2 style={{color: '#9fef00'}} className="text-center display-4 mt-3 fw-bold">
                    Experience & Skills
                </h2>
                <p className="lead fs-4 text-center mb-5">
                    Practicing each day keeps the tutorials away
                </p>
                <div className="col-md-12 col-lg-7 text-white w-100 px-5" id="experience">
                    <h3 className="display-6 fw-5">Web Development Student</h3>
                    <p className="h3" style={{color: '#9fef00'}}>
                        KodeGo (September 2022 - Present)
                    </p>
                    <p className="lead">
                        Currently, I'm training at KodeGo bootcamp taking full stack web dev
                        course to gain practical skills and experience on my chosen career
                        path in the IT industry.
                    </p>
                </div>
                <div className="text-white text-center mt-5 w-50" id="skills">
                    <h4 className="fs-2 fw-bold mb-3" style={{color: '#17d9e0'}}>Skills and Tools</h4>
                    <ul className="list-inline dev-icons d-flex justify-content-evenly">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-bootstrap"></i>
                        </li>
                        <li className="list-inline-item"><i className="fab fa-git"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-java"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}