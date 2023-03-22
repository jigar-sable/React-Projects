import React from 'react'
import site from '../images/site.png'

const Features = () => {
    return (
        <section id="features" className="py-4">
            <div className="container text-center">
                <h4 className="fs-6 text-primary text-uppercase lh-1">Features</h4>
                <h4>Key features of the product</h4>
                <p>It will be as simple as occidental in fact, it will be Occidental.</p>
            </div>
            <div className="container my-4">
                <div className="row py-4">
                    <div className="col-lg-6 p-4">
                        <h4>Improve your Marketing business</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus totam nemo recusandae corporis tempora.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid" src={site} alt="" />
                    </div>
                </div>
            </div>

            <div className="bg-light container my-4">
                <div className="row py-4">
                    <div className="col-lg-5">
                        <img className="img-fluid" src={site} alt="" />
                    </div>
                    <div className="col-lg-6 p-4">
                        <h4>Improve your Marketing business</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus totam nemo recusandae corporis tempora.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row py-4">
                    <div className="col-lg-6 p-4">
                        <h4>Improve your Marketing business</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus totam nemo recusandae corporis tempora.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-lg-5">
                        <img className="img-fluid" src={site} alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Features
