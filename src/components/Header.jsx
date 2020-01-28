import React, { useState, useEffect } from 'react'
import image1 from '../img/mountains1.jpg'
import image2 from '../img/mountains2.jpg'
import image3 from '../img/mountains3.jpg'


const Header = () => {
    const [nav, setNav] = useState('')
    const [btn, setBtn] = useState('d-none')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 480) {
                setNav('nav')
                setBtn('monBoutton')
            } else {
                setNav('')
                setBtn('d-none')
            }
        })
    })

    const click = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            <header id="header">

                <nav id={nav} className="navbar navbar-expand-lg navbar-light">

                    <div className="col-5 ">
                        <a className="navbar-brand d-block mx-auto" id="aHome" href="#header">Home.</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse col-7 row" id="navbarSupportedContent">
                        <ul className="navbar-nav" id="ulNav">
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">Work</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div>
                    {/* <div className="text-center" id="divHello">
                        <h1>Hello! My name is Noel Bakiasi and I'm a full stack developer.</h1>
                    </div> */}

                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={image1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={image3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <button onClick={click} className={btn}><i className="fas fa-chevron-up text-white"></i></button>
            </header>
        </div>

    )
}

{/* <div className="col-6 text-right">
    <a href="https://www.linkedin.com/in/bakiasi-noel-9049091a0/"><i className="fab fa-linkedin-in"></i></a>
    <a href="https://www.instagram.com/noelbakiasi/"><i className="fab fa-instagram"></i></a>
</div> */}

export default Header