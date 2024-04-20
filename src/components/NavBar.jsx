import { useState, useEffect } from "react"; 
import { Navbar, Nav, Container } from "react-bootstrap";
import socialIcon1 from '../assets/img/linkedin_icon.png';
import socialIcon2 from '../assets/img/github_icon.png';
import socialIcon3 from '../assets/img/gmail_icon.png';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                <span className="navbar-text">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </span>
                {/* <div className="social-icon">
                    <a href="#"><img src={socialIcon1} alt="linkedin icon"></img></a>
                    <a href="#"><img src={socialIcon2} alt="github icon"></img></a>
                    <a href="#"><img src={socialIcon3} alt="gmail icon"></img></a>
                </div> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Router>
    )
    }