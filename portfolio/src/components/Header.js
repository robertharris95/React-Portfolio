import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
<>
<header>
 <div className="banner">
    <div className="container-fluid">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="./public/Personal Banner 1(1).jpg"
                         className="d-block w-100" alt="MEAN and MERN Stack" />
                      </div>
                      <div className="carousel-item">
                        <img src="./public/Personal Banner 2.jpg" 
                        className="d-block w-100" alt="Collaboration"/>
                      </div>
                      <div className="carousel-item">
                        <img src="./public/Personal Banner 3.jpg" 
                        className="d-block w-100" alt="Mobile friendly websites"/>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
            </div>

    </div>
  </div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        R.Harris Web Design
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/personal"
              className={window.location.pathname === "/personal" ? "nav-link active" : "nav-link"}
            >
              Personal Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/school"
              className={window.location.pathname === "/school" ? "nav-link active" : "nav-link"}
            >
              Schoolastic Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/redesign"
              className={window.location.pathname === "/redesign" ? "nav-link active" : "nav-link"}
            >
              Redesign Initiative
            </Link>
          </li>
        </ul>
      </div>
    </nav>
            </header>
    </>)
}

export default Header;