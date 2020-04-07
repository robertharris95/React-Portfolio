import React from "react";

function Main() {
    return (
    <>
    <div className="container-fluid rounded-lg">
        <section className="rounded-lg bio row">

          <picture className="col-md-6">
          <img src={process.env.PUBLIC_URL + "/images/Professional-Photo.jpg" }
          className="float-left resize img-fluid rounded-lg"  
            alt="My professional headshot" />
          </picture>
          <div className="col-md-6">
            <h2>
                <b>About Me</b>
            </h2>
            <p id="bio">
                Welcome to R. Harris Web Design! My name is Robbie Harris and I am the founder of R. Harris web design.
                Here, you can find my personal portfolio of projects and contact information for employers and clients,
                Use the links above to navigate. I look forward to working with you!
                <br/><br/>
                A bit about myself. I am a graduate of Rice University, Houston native, and all around lover of all things Texas.
                I specialize in the MEAN and MERN stacks for developing robust web applications for personal or business use.
                When not developing, I love spending time with my fiancé Breanna, playing with my bulldog Chuck, and eating any and every thing Houston has to offer.
                 
            </p> 
          </div>
          </section>
          </div>
    </>
    )};

    export default Main;