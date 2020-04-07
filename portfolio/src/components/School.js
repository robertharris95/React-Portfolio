import React from "react";

function School() {
    return (
        <>
            <main className="container">

            <div className="row" >
                <p className="Project-headings">Capstone Projects</p>
            </div>

            <div className="row">
            <div className="card" style={{width: "18rem"}}>
            <img src={process.env.PUBLIC_URL + '/images/logo 2.png'} className="card-img-top" alt="Loqal Logo"/>
            <div className="card-body">
                <h5 className="card-title">Loqal</h5>
                <p className="card-text">This Full-Stack application uses multiple third-party API's to help users find unknown musicians as well as listen to days top hits  </p>
                <a href="https://robertharris95.github.io/RDOProject1/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Here</a>
            </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src={process.env.PUBLIC_URL + '/images/logo4.png'} className="card-img-top" alt="Contract Bay Logo"/>
                <div className="card-body">
                <h5 className="card-title">Contract Bay</h5>
                <p className="card-text">This full stack application utilizes express.js servers, materialize cli, and mysql databases to create a marketplace for wholesailers can create and purchase contracts to sell their raw products.</p>
                <a href="https://polar-island-40995.herokuapp.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Here</a>
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="Coming Soon"/>
                <div className="card-body">
                    <h5 className="card-title">Capstone 3</h5>
                    <p className="card-text">This content is coming soon!</p>
                    <a href="#" className="btn btn-primary">View Here</a>
                </div>
                </div>
            </div>
        </main>
        </>
    )}
export default School;