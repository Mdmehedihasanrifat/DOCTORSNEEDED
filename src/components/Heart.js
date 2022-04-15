import React from 'react';
import love from '../images/heart.png'
import NavbarDark from "./Shared/Navbar/NavbarDark";
import Footer from "./Shared/Footer/Footer";

const Heart = () => {
    return (
        <div>
            <NavbarDark></NavbarDark>
            <div class="container bg-dark">
                <div class="row">
                    <div class="col text-center">

                        <h1 class="text-light mb-4 font-italic display-1 banner-heading">Heart <img src={love} class="img-fluid" width="250"/>disease prediction</h1>
                        <a href="#" class="btn btn-lg d-block m-auto btn-outline-danger px-5 mx-auto check "> predict Heart</a>
                    </div>
                    <p className="text-light">According to the latest WHO data published in 2018 Coronary Heart Disease Deaths in Bangladesh reached 118,287 or 15.23%
                        of total deaths. The age adjusted Death Rate is 109.32 per 100,000 of population ranks Bangladesh #115 in the world.
                        Review other causes of death by clicking the links below or choose the full health profile.</p>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Heart;