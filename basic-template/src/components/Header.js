import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav class="navbar bg-light navbar-expand-lg mb-4 fixed-top" id="mainNav">
        <div class="container">
          <Link class="navbar-brand" to="/">Brand</Link>
          <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-align-justify"></i></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto gap-1">
              <li class="nav-item"><Link class="nav-link" to="/#home">Home</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/#about">About</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/#features">Features</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/#portfolio">Portfolio</Link></li>
              <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
