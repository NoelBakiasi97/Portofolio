import React, { useState, useEffect } from 'react'
import image1 from '../img/mountains1.jpg'
import image2 from '../img/mountains2.jpg'
import image3 from '../img/mountains3.jpg'


const Header = () => {
    const [nav, setNav] = useState('')
    const [btn, setBtn] = useState('d-none')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 65) {
                setNav('nav')
                setBtn('monBoutton')
            }
            else {
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

                <nav id={nav} className={nav === '' ? 'navbar navbar-expand-lg navbar-light position-absolute' : 'navbar navbar-expand-lg navbar-light'}>

                    <div className=" col-sm-5 col-md-12 col-lg-5 d-flex p-0">
                        <div>
                            <button className="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="mx-auto">
                            <a className="navbar-brand" id="aHome" href="#header">Home</a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse  col-sm-7 col-md-12 col-lg-7 row" id="navbarSupportedContent">
                        <ul className="navbar-nav" id="ulNav">
                            <li className="nav-item ">
                                <a className="nav-link" href="#sec-about">About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#work">Work</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>


                </nav>
                <div>
                    <div className="text-center" id="divHello">
                        <h1>Hello! My name is Noel Bakiasi and I'm a full stack developer.</h1>
                    </div>

                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={click} className={btn}><i className="fas fa-chevron-up text-white"></i></button>
            </header>
        </div>

    )
}



export default Header