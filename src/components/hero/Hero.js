import banner from '../../assets/banner.jpg'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="container col-xxl-9" id="heroSection">
                <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img
                            src={banner}
                            className="d-block mx-lg-auto img-fluid"
                            alt="This is me!"
                            width="700"
                            height="500" />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="fs-1 fw-bold lh-1 mb-4 text-white">
                            <span className="display-1 fw-bold" style={{ color: '#9fef00' }}>Hello! </span><br />
                            I'm Alfred, a web developer student
                        </h1>
                        <div class="social-icons">
                            <a class="social-icon" href="https://github.com/johnalfred12"><span class="fa-brands fa-github"></span></a>
                            <a class="social-icon" href="https://www.facebook.com/john.alfonso.560"><span class="fa-brands fa-facebook-f"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}