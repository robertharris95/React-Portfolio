import React from "react";
function Personal() {
    return (
        <>
 <>
    <main className="container">

    <div className="row" >
        <p className="Project-headings">Small Projects</p>
    </div>


    <div className="row">
    <div className="card" style={{width: "18rem"}}>
    <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">Twitter Bot</h5>
        <p className="card-text">This content is coming soon!</p>
        <a href="#" className="btn btn-primary">View Here</a>
    </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
        <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Weather Bot</h5>
        <p className="card-text">This content is coming soon!</p>
        <a href="#" className="btn btn-primary">View Here</a>
        </div>
    </div>

    <div className="card" style={{width: "18rem"}}>
        <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Github Notifier</h5>
            <p className="card-text">This content is coming soon!</p>
            <a href="#" className="btn btn-primary">View Here</a>
        </div>
        </div>
    </div>

    <div className="row">
        <div className="card" style={{width: "18rem"}}>
        <img src={process.env.PUBLIC_URL + "/images/Tracker.png" } className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">User Tracking Application</h5>
            <p className="card-text">This application displays the data of users from a data set dynamically in Reactjs</p>
            <a href=" https://robertharris95.github.io/Homework-15/" className="btn btn-primary">View Here</a>
        </div>
        </div>
    
        <div className="card" style={{width: "18rem"}}>
            <img src={process.env.PUBLIC_URL + "/images/github logo.png" } className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Team Profile Generator</h5>
            <p className="card-text">This application lets a user create and manage a team of people from their BASH terminal</p>
            <a href=" https://github.com/robertharris95/Homework-8" className="btn btn-primary">View Here</a>
            </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
            <img src={process.env.PUBLIC_URL + "/images/Budget.png" } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">PWA Budget Tracker</h5>
                <p className="card-text">This Progressive Web Application allows for users to track their expenses both online and offline</p>
                <a href="https://safe-hollows-41299.herokuapp.com/" className="btn btn-primary">View Here</a>
            </div>
            </div>
        </div>


    <div className="row">
        <div className="card" style={{width: "18rem"}}>
            <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">RSS Aggregator</h5>
            <p className="card-text">This content is coming soon!</p>
            <a href="#" className="btn btn-primary">View Here</a>
            </div>
        </div>
        
        <div className="card" style={{width: "18rem"}}>
            <img src={process.env.PUBLIC_URL + "/images/Workout.png" } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Workout Log</h5>
                <p className="card-text">This application helps users to log their exercises via their web browser. They can add new workouts as they see fit and the stats page will display dynamic graphs of their workout progress. </p>
                <a href="https://dry-lowlands-14027.herokuapp.com/?id=5e7c2240926a8700177cae2c" className="btn btn-primary">View Here</a>
            </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Google Map</h5>
                <p className="card-text">This content is coming soon!</p>
                <a href="#" className="btn btn-primary">View Here</a>
                </div>
            </div>
        </div>


        <div className="row">
            <p className="Project-headings">Large Projects</p>
        </div>
    <div className="row">
        <div className="card" style={{width: "18rem"}}>
            <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Raspberry Pi Robot</h5>
            <p className="card-text">This content is coming soon!</p>
            <a href="#" className="btn btn-primary">View Here</a>
            </div>
        </div>
        
        <div className="card" style={{width: "18rem"}}>
            <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Bar Hopper App</h5>
                <p className="card-text">This content is coming soon!</p>
                <a href="#" className="btn btn-primary">View Here</a>
            </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://giordanos.com/wp-content/uploads/coming-soon-v2.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Online Tournament Generator</h5>
                <p className="card-text">This content is coming soon!</p>
                <a href="#" className="btn btn-primary">View Here</a>
                </div>
            </div>
        </div>
        </main>
        </>
        </>
    )}
export default Personal;