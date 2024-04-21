import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import skillIcon1 from '../assets/img/skill-icon1.png';
import skillIcon2 from '../assets/img/skill-icon2.png';
import skillIcon3 from '../assets/img/skill-icon3.png';
import skillIcon4 from '../assets/img/skill-icon4.png';
import skillIcon5 from '../assets/img/skill-icon5.png';
import skillIcon6 from '../assets/img/skill-icon6.png';
import skillIcon7 from '../assets/img/skill-icon7.png';
import skillIcon8 from '../assets/img/skill-icon8.png';
import techIcon1 from '../assets/img/tech-icon1.png';
import techIcon2 from '../assets/img/tech-icon2.png';
import techIcon3 from '../assets/img/tech-icon3.png';
import techIcon4 from '../assets/img/tech-icon4.png';
import techIcon5 from '../assets/img/tech-icon5.png';
import techIcon6 from '../assets/img/tech-icon6.png';
import techIcon7 from '../assets/img/tech-icon7.png';
import techIcon8 from '../assets/img/tech-icon8.png';
import techIcon9 from '../assets/img/tech-icon9.png';
import techIcon10 from '../assets/img/tech-icon10.png';

// Function that returns list of skills and technologies in a carousel format
export const Skills = () => {
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

    return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Skills:</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skillIcon1} alt="Image" />
                                <h5>Web Design, UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon2} alt="Image" />
                                <h5>Front-end Development</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon3} alt="Image" />
                                <h5>Back-end Development</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon4} alt="Image" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon5} alt="Image" />
                                <h5>API Integration</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon6} alt="Image" />
                                <h5>Agile Development</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon7} alt="Image" />
                                <h5>Security, Encryption</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon8} alt="Image" />
                                <h5>Testing, Debugging</h5>
                            </div>
                        </Carousel>
                        <div className="tech">
                                <h2>Technologies I've Worked With:</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                <img src={ techIcon1 } alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon2 } alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon3 } alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon4 } alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon5 } alt="Image" />
                                    <h5>Express.js</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon6 } alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon7 } alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon8 } alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon9 } alt="Image" />
                                    <h5>Insomnia</h5>
                                </div>
                                <div className="item">
                                <img src={ techIcon10 } alt="Image" />
                                    <h5>Adobe Sandbox</h5>
                                </div>
                        </Carousel>
                        </div>
                            </div>
                    </div>
                </div>
            </div>
    </section>
        )
    }