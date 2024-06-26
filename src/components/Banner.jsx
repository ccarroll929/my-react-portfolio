import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
// Typing animation effect 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
    tick();
    }, delta);

    return () => { clearInterval(ticker) };
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
    setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setIndex(prevIndex => prevIndex - 1);
    setDelta(period);
    } else if (isDeleting && updatedText === '') {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setIndex(1);
    setDelta(500);
    } else {
    setIndex(prevIndex => prevIndex + 1);
    }
}

// Returns about me section
return (
    <section className="banner" id="home">
        <Container className="align-items-center">
        <div className="headerImg">
            <img src={headerImg} alt="Header Img"/>
            </div>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Christina:`}</h1>
                <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span>
                <p>Welcome to my portfolio page! My name is Christina Carroll and I'm a certified full-stack developer with a passion for problem solving and creating unique web designs. As I continue on my journey of learning and self-improvement, I will be updating this portfolio with my accomplishments and completed projects. Feel free to explore my portfolio and checkout my skills, projects, resume, and social links!</p>
                <button className="connect" onClick={() => console.log('connect')}><a href="#contact">Let’s Connect</a><ArrowRightCircle size={25} /></button>
            </div>}
            </TrackVisibility>
    </Container>
    </section>
)
}