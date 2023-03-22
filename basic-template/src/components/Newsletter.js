import React from 'react'

const Newsletter = () => {
    return (
        <section id="newsletter" className="bg-light py-4">
            <div className="container text-center">
                <h4 className="fs-6 text-primary text-uppercase lh-1">Subscribe</h4>
                <h4>Subscribe to our Newsletter</h4>
                <p>It will be as simple as occidental in fact, it will be Occidental.</p>
            </div>
            <div className="col-lg-6 py-4 mx-auto">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <input type="text" class="form-control py-2" placeholder="Email Address" />
                    </div>
                    <div className="col-12 col-lg-4">
                        <button className="btn btn-primary py-2">Subscribe Us</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Newsletter
