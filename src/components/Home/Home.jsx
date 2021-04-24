import React from "react";
import styles from "./Home.css";
import typing from "./type.png";

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col">
                        {/* <div class="container">
                            <img
                                src={typing}
                                alt=""
                                class="img-fluid border rounded-3 shadow-lg mb-4"></img>
                        </div> */}
                        <div class="styles.divider"></div>
                        <div class="px-4 styles.pt-5 my-5 text-center border-bottom">
                            <h1 class="display-4 fw-bold">About Us</h1>
                            <br></br>
                            <h2 class="display-5 fw-bold">Our Purpose</h2>
                            <div class="col-lg-9 mx-auto">
                                <p class="lead mb-4">
                                    The Association of Computer Science
                                    Undergraduates (ACSU) promotes educational,
                                    professional, and social interaction among
                                    every undergraduate student interested in
                                    computer science. We facilitate student
                                    communication with faculty, alumni, and
                                    corporate representatives to enhance the
                                    undergraduate experience in computer
                                    science. ACSU is Cornell's chapter of the
                                    Association for Computing Machinery (ACM).
                                    We receive support from the Department of
                                    Computer Science and several corporate
                                    sponsors.
                                </p>
                            </div>
                            <h2 class="display-5 fw-bold">What We Do</h2>
                            <div class="col-lg-9 mx-auto">
                                <p class="lead mb-4">
                                    We host a variety of events, such as social,
                                    faculty, educational, and company events. We
                                    offer special resources, such as access to a
                                    resume book that we give out to our
                                    sponsors, as well as mentorship within the
                                    CIS community!
                                </p>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                        <div class="styles.divider"></div>
                        <div class="px-4 styles.pt-5 my-5 text-center border-bottom">
                            <h1 class="display-4 fw-bold">Upcoming Events</h1>
                            <br></br>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                        <div class="styles.divider"></div>
                        <div class="px-4 styles.pt-5 my-5 text-center border-bottom">
                            <h1 class="display-4 fw-bold">Featured Articles</h1>
                            <br></br>
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Card title
                                            </h5>
                                            <p class="card-text">
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool! Very cool! Very cool!
                                                Very cool!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div
                        data-bs-spy="scroll"
                        data-bs-target="#list-example"
                        data-bs-offset="0"
                        class="col-xs-1"
                        tabIndex="0">
                        <h5 id="list-item-1">Blah</h5>
                        <h5 id="list-item-2">Blah</h5>
                        <h5 id="list-item-3">Blah</h5>
                        <h5 id="list-item-4">Blah</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
