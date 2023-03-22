import Products from './Products';
import bg from '../images/img.png';

const Header = () => {
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-center flex-column">
                        <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                        <p className="card-text lead fs-2">Checkout Products!</p>
                    </div>
                    <div className="col-md-4">
                        <img src={bg} className="card-img img-fluid" alt="hero" />

                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}

export default Header
