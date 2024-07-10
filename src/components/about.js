import React from "react";
import AboutImg from "../assets/hero.jpg";

const About = () => {
  return (
    <section className="bg-secondary text-white py-32 px-5" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between h-full">
        <div className="about-info text-justify">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <p className="pb-5">
            Hi, my name Is Mohammed Tayyab Hussain. As a Computer Scientist EFZ
            with vocational baccalaureate and one year of work experience in
            application development at Novartis AG, I am privileged to have
            acquired a range of technical skills over the years.
          </p>
          <p className="pb-5">
            My attention to detail and design, coupled with proficient skills,
            enables me to work effectively with other team members and gain
            valuable experience in collaborative settings.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, JavaScript,
            Tailwind CSS and many more.
          </p>
          <p>In backend I know Node.js, Mysql, MSSQL etc.</p>
          <p>
            In my spare time I love to code, go to the gym and like to meet up
            with friends and spend time with my family.
          </p>
          <br></br>
          <br></br>
          <a href="#projects"
            className="btn bg-accent rounded-xl border-2 border-[#4F46E5] text-white px-6 py-3 hover:bg-transparent block w-full" // Adjusting button width
          >
            See Projects
          </a>
        </div>
        <div className="about-img ">
          <br></br>
          <br></br>
          <img
            src={AboutImg}
            alt="my_photo"
            className="w-full h-auto md:max-w-sm mx-auto" // Adjusting image width and height
          />
        </div>
      </div>
    </section >
  );
};

export default About;