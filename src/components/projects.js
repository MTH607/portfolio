import React from "react";
import portfolio from "../assets/undraw_portfolio_website_re_jsdd.svg";
import jokes from "../assets/undraw_wordpress_utxt.svg";
import gaestebuch from "../assets/undraw_add_user_re_5oib.svg";

const Projects = () => {
    // Array of project objects, each containing information about a project
    const Projects = [
        {
            img: portfolio,
            title: "Website Portfolio",
            desc: "The Repo for this website with React, Nodejs, Tailwind CSS on WSL2",
            code: "https://github.com/MTH607/portfolio",
        },
        {
            img: jokes,
            title: "Jokes plugin for WordPress",
            desc: "Developed in PHP. Users can display jokes through an API and request a new joke from a click of a button.",
            code: "https://github.com/MTH607/Jokes-Plugin",
        },
        {
            img: gaestebuch,
            title: "Guestbook",
            desc: "Developed in JavaScript and C#. Users can register their name and adress as guest. Administrator can edit guests",
            code: "https://github.com/MTH607/Gaestebuch",
        }
    ];

    return (
        // Projects section with primary background color and white text
        <section className="bg-primary text-white px-5 py-32" id="projects">
            {/* Container to center content horizontally */}
            <div className="container mx-auto grid md:grid-cols-3 items-center md:justify-between">
                {/* Information about projects */}
                <div className="about-info mb-5">
                    {/* Title */}
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-customPurple pb-2">
                        Projects
                    </h2>
                    {/* Description */}
                    <p className="pb-5">
                        These are some of my best projects. Check them out:
                    </p>
                </div>
                {/* Placeholder for image */}
                <div className="about-img"></div>
            </div>
            {/* Grid for displaying project cards */}
            <div className="projects container mx-auto grid grid-cols-3 gap-20">
                {/* Mapping over each project to display its information */}
                {Projects.map((project, i) => {
                    return (
                        // Each project card
                        <div className="relative" key={i}>
                            {/* Project image */}
                            <img src={project.img} alt={project.title} />
                            {/* Overlay with project details */}
                            <div className="rounded-xl flex absolute left-0 right-0 top-0 bottom-0 mx-auto bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                                {/* Project title and description */}
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.title} <br></br><br></br>{project.desc}
                                </p>
                                {/* Links to live project and code repository */}
                                <div className="mx-auto">
                                    <a
                                        href={project.code}
                                        className="btn bg-accent rounded-xl border-2 border-[#4F46E5] text-white px-6 py-3 hover:bg-transparent block w-full"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;