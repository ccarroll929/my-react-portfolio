import React from 'react';
import { ProjectCard } from "./ProjectCard";
import Carousel from 'react-multi-carousel';

// Project images
import dailyPlanner from "../assets/img/projectImg1.png"; 
import weatherApp from "../assets/img/projectImg2.png";
import noteTaker from "../assets/img/projectImg3.png";
import wellnessTracker from "../assets/img/projectImg4.png";
import pwaEditor from "../assets/img/projectImg5.png";
import eCommerceApp from "../assets/img/projectImg6.png";
import socialNetworkApi from "../assets/img/projectImg7.png"; 
import employeeTracker from "../assets/img/projectImg8.png";
import logoGenerator from "../assets/img/projectImg9.png";
import readmeGenerator from "../assets/img/projectImg10.png";
import passwordGenerator from "../assets/img/projectImg11.png";
import deskSpace from "../assets/img/projectImg12.png";

// Exporting the Projects component 
export const Projects = () => {
    const responsive = {
        largeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };

// Project data to be used in ProjectCard.jsx
const projects = [
    {
    title: "Flashcard App",
    projectLink: "https://desk-space.onrender.com/",
    githubLink: "https://github.com/ShaneLeeJohnson/Desk-Space",
    imgUrl: deskSpace,
    },
    {
    title: "Daily Planner",
    projectLink: "https://ccarroll929.github.io/daily-planner/",
    githubLink: "https://github.com/ccarroll929/daily-planner",
    imgUrl: dailyPlanner,
    },
    {
    title: "Weather Dashboard",
    projectLink: "https://ccarroll929.github.io/weather-app/",
    githubLink: "https://github.com/ccarroll929/weather-app",
    imgUrl: weatherApp,
    },
    {
    title: "Express.js Note Taker",
    projectLink: "https://express-js-note-taker-ljci.onrender.com/",
    githubLink: "https://github.com/ccarroll929/express.js-note-taker",
    imgUrl: noteTaker,
    },
    {
    title: "Wellness Tracker",
    projectLink: "https://ccarroll929.github.io/wellness-tracker-app/",
    githubLink: "https://github.com/ccarroll929/wellness-tracker-app",
    imgUrl: wellnessTracker,
    },
    {
    title: "PWA Text Editor",
    projectLink:"https://pwa-text-editor-lan8.onrender.com/",
    githubLink: "https://github.com/ccarroll929/PWA-text-editor",
    imgUrl: pwaEditor,
    },
    {
    title: "eCommerce Application",
    projectLink:"https://drive.google.com/file/d/1rUU7F__6iY28_lvrhhNv1igIrlLlMVDv/view",
    githubLink: "https://github.com/ccarroll929/sequelize-ecommerce-application",
    imgUrl: eCommerceApp,
    },
    {
    title: "Social Network API",
    projectLink:"https://drive.google.com/file/d/1w18IRo8NiMAN3eMSQqwUz6kttnTFVDMZ/view",
    githubLink: "https://github.com/ccarroll929/social-network-api",
    imgUrl: socialNetworkApi,
    },
    {
    title: "MySQL Employee Tracker",
    projectLink:"https://drive.google.com/file/d/1QcXHoTWUXjlXpOnGWF5pGqe7ouygpOj-/view",
    githubLink: "https://github.com/ccarroll929/SQL-employee-tracker",
    imgUrl: employeeTracker,
    },
    {
    title: "SVG Logo Generator",
    projectLink:"https://drive.google.com/file/d/1Wl2Bu8BX-rHOvZo8veBMJIcO7uiQ1lZI/view",
    githubLink: "https://github.com/ccarroll929/SVG-logo-generator",
    imgUrl: logoGenerator,
    },
    {
    title: "Password Generator",
    projectLink:"https://ccarroll929.github.io/password-generator/",
    githubLink: "https://github.com/ccarroll929/password-generator",
    imgUrl: passwordGenerator,
    },
    {
    title: "README.md Generator",
    projectLink:"https://drive.google.com/file/d/1eLYJvKmpGOjXNOfSwVls3OH-U57_jHip/view",
    githubLink: "https://github.com/ccarroll929/README-generator",
    imgUrl: readmeGenerator,
    },
];

// Returns a carousel of all projects generated in ProjectCard.jsx
return (
<section className="project" id="projects">
    <div className="container">
        <div className="row">
            <div className="col-12">
            <div className="project-bx">
                <h2>My Projects:</h2>
                <p>Click on a project image to see the deployed application or video walkthrough demonstration of the application's functionality.</p>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme project-slider">
                    {
                    projects.map((project, index) => {
                    return (
                            <ProjectCard
                            key={index}
                            {...project}
                                        />
        )   
    })
}
</Carousel>
</div>
</div>
</div>
</div>
</section>
) 
}

    