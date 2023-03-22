import service from '../images/service.png'

const Services = () => {
    return (
        <>
            <div class="container my-5 mt-5">
                <h1 className="text-primary fs-3 mb-4 pt-3 text-uppercase text-center">Services</h1>

                {/* <!-- grid layout courses container --> */}
                <div class="row gx-4 gy-5">
                    {
                        Array(10).fill('').map((el) => (
                            <div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <img src={service} alt="" class="img-fluid rounded-top" />
                                    <div class="card-body">

                                        {/* <!-- course title --> */}
                                        <h6 class="fs-5">Web Development</h6>

                                        <button type="submit" class="btn btn-warning shadow-sm w-100 mt-2">Get Qoute</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Services
