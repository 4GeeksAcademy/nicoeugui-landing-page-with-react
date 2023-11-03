import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark border-body" data-bs-theme="dark">
            <div class="container">

                <a class="navbar-brand text-white col-3" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active fw-bold text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar