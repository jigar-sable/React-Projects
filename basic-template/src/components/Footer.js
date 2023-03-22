import React from 'react'
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer class="bg-light py-4">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 text-center text-lg-start my-auto h-100">
                <ul class="list-inline mb-2">
                    <li class="list-inline-item"><a href="#">About</a></li>
                    <li class="list-inline-item"><span>⋅</span></li>
                    <li class="list-inline-item"><a href="#">Contact</a></li>
                    <li class="list-inline-item"><span>⋅</span></li>
                    <li class="list-inline-item"><a href="#">Terms of Use</a></li>
                    <li class="list-inline-item"><span>⋅</span></li>
                    <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p class="text-muted small mb-4 mb-lg-0">© Brand 2021. All Rights Reserved.</p>
            </div>
            <div class="col-lg-6 text-center text-lg-end my-auto h-100">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item"><a href="#" className="fs-5 me-2"><BsLinkedin/></a></li>
                    <li class="list-inline-item"><a href="#" className="fs-5 me-2"><BsInstagram/></a></li>
                    <li class="list-inline-item"><a href="#" className="fs-5"><BsTwitter/></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    )
}

export default Footer
