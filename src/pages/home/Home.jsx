import React from 'react';
import Footer from "@/components/footer/Footer.jsx";
import Navbar from "@/components/navbar/Navbar.jsx";
import HeroSection from "@/components/heroSection/HeroSection.jsx";
import AiTypes from "@/components/aiTypes/AiTypes.jsx";
import AiBenefits from "@/components/aiBenefits/AiBenefits.jsx";
import Contact from "@/components/contact/Contact.jsx";

function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <HeroSection/>
                <AiTypes/>
                <AiBenefits/>
                <Contact/>
            </main>
            <Footer/>
        </>
    );
}

export default Home;