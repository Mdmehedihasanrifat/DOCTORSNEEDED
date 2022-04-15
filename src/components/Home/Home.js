import React from 'react';
import HeroSection from "../Home/HeroSection";
import InfoSection from "../Home/InfoSection";
import Services from "../Home/Services";

import NavbarDark from "../Shared/Navbar/NavbarDark";
import Footer from "../Shared/Footer/Footer";
import Testimonials from "./Testimonials/Testimonials";
import MakeAppointment from "./MakeAppointment/MakeAppointment";



const Home = () => {
    return (
        <div>

            <HeroSection></HeroSection>

             <MakeAppointment></MakeAppointment>
            <Services></Services>

            <Testimonials></Testimonials>
            <Footer></Footer>

        </div>
    );
};

export default Home;