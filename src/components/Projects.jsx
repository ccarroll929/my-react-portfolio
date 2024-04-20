import React from 'react';
import { ProjectCard } from "./ProjectCard";
import Carousel from 'react-multi-carousel';

// Project images
import dailyPlanner from "../assets/img/dailyplanner.png";
import weatherApp from "../assets/img/weather-dashboard.png";
import noteTaker from "../assets/img/notetaker.png";
import wellnessTracker from "../assets/img/wellness-tracker.png";
import pwaEditor from "../assets/img/pwa-editor.png";
import eCommerceApp from "../assets/img/sequelize-eCommerce.png";
import socialNetworkApi from "../assets/img/socialnetworkapi.png";
import employeeTracker from "../assets/img/employee-tracker.png";
import logoGenerator from "../assets/img/logo-generator.png";
import passwordGenerator from "../assets/img/password-generator.png";
import readmeGenerator from "../assets/img/readme-generator.png";


export const Projects = () => {
    const responsive = {
        largeDesktop: {
            // the naming can be any, depends on you.
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

const projects = [
    {
    title: "Daily Planner",
    projectLink: "https://ccarroll929.github.io/daily-planner/",
    imgUrl: dailyPlanner,
    },
    {
    title: "Weather Dashboard",
    projectLink: "https://ccarroll929.github.io/weather-app/",
    imgUrl: weatherApp,
    },
    {
    title: "Express.js Note Taker",
    projectLink: "https://express-js-note-taker-ljci.onrender.com/",
    imgUrl: noteTaker,
    },
    {
    title: "Wellness Tracker",
    projectLink: "https://ccarroll929.github.io/wellness-tracker-app/",
    imgUrl: wellnessTracker,
    },
    {
    title: "PWA Text Editor",
    projectLink:"https://pwa-text-editor-lan8.onrender.com/",
    imgUrl: pwaEditor,
    },
    {
    title: "eCommerce Application",
    projectLink:"https://drive.google.com/file/d/1rUU7F__6iY28_lvrhhNv1igIrlLlMVDv/view",
    imgUrl: eCommerceApp,
    },
    {
    title: "Social Network API",
    projectLink:"https://drive.google.com/file/d/1w18IRo8NiMAN3eMSQqwUz6kttnTFVDMZ/view",
    imgUrl: socialNetworkApi,
    },
    {
    title: "MySQL Employee Tracker",
    projectLink:"https://drive.google.com/file/d/1QcXHoTWUXjlXpOnGWF5pGqe7ouygpOj-/view",
    imgUrl: employeeTracker,
    },
    {
    title: "SVG Logo Generator",
    projectLink:"https://drive.google.com/file/d/1Wl2Bu8BX-rHOvZo8veBMJIcO7uiQ1lZI/view",
    imgUrl: logoGenerator,
    },
    {
    title: "Random Password Generator",
    projectLink:"https://ccarroll929.github.io/password-generator/",
    imgUrl: passwordGenerator,
    },
    {
    title: "README.md Generator",
    projectLink:"https://drive.google.com/file/d/1eLYJvKmpGOjXNOfSwVls3OH-U57_jHip/view",
    imgUrl: readmeGenerator,
    },
];

return (
<section className="project" id="projects">
    <div className="container">
        <div className="row">
            <div className="col-12">
            <div className="project-bx wow zoomIn">
                <h2>My Projects:</h2>
                <p>Click on a project image to see the deployed application or a video walkthrough demonstration of the application's functionality.</p>
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

    