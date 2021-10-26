import React from "react";
import {Link} from "react-scroll"
import'./components/Navbar.css'

export default class Header extends React.Component{

render(){
    return(
        <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-primary justify-content-end">
        <div className="container-fluid">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="nav" style={{marginRight:"20px"}}>
            <li class="nav-item px-3">
            <Link activeClass="active" className="link-item" to="hero" spy="true" smooth="true" offset={-70} duration={500}>
               Ana Sayfa
                </Link>
            </li>
            <li class="nav-item px-3">
            <Link activeClass="active" className="link-item" to="services" spy="true" smooth="true" offset={-55} duration={500}>
                Terapiler
            </Link>
            </li>
            <li class="nav-item px-3">
            <Link activeClass="active" className="link-item" to="about" spy="true" smooth="true" offset={-56} duration={500}>
                Hakkımızda
                </Link>
            </li>
            </ul>
            </div>
            </div>
        </nav>   


    )
}


}