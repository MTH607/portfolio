import React from "react";
import HeroImg from "../assets/undraw_code_thinking_re_gka2.svg";

const Hero = () => {
    return (
        // Hero section with primary background color, white text, and padding
        <section className="bg-primary text-white py-32 h-screen"> {/* Set height to cover the screen */}
            {/* Container to center content horizontally and adjust layout for different screen sizes */}
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between h-full"> {/* Set height to full height of the container */}
                {/* Left side: Information */}
                <div className="hero-info pb-5 md:pb-0">
                    {/* Title */}
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br />I am <span className="text-accent">the</span> <br />
                        Frontend Developer
                    </h1>
                    {/* Description */}
                    <p className="py-5">
                        This webpage is developed in JavaScript, React.js and Tailwind CSS
                    </p>
                </div>

                {/* Right side: Image */}
                <div className="hero-img">
                    {/* Hero illustration */}
                    <img
                        src={HeroImg} // Source of the image
                        alt="coding illustration" // Alternative text for accessibility
                        className="lgw-[80%] ml-auto" // Styling for the image, such as width and margin
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
