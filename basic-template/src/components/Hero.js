import hero from '../images/site.png';

const Hero = () => {
    return (
        <header className="d-flex" style={{minHeight:"90vh"}} id="home">
            <div class="container my-auto">
                <div className="row">
                    <div className="col-lg-6">
                        <p>DISCOVER BRAND TODAY</p>
                        <h1 className="my-4">Make your Site Amazing & Unique with Brand</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia nemo hic deleniti cumque vero sit. Sapiente provident unde quasi.</p>
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-warning mx-3">Learn More</button>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={hero} alt="" />
                    </div>
                </div>
            </div>
        </header>


    )
};

export default Hero;
