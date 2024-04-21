import { useState, useEffect } from "react"; 
import { Navbar, Nav, Container } from "react-bootstrap";
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {
// Function to determine active links/scroll states
    const [activeLink, setActiveLink] = useState('aboutme');
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
// Returns navigation bar with navigation links
    return (
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                <span className="navbar-text">
                <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                <Nav.Link href="#socials" className={activeLink === 'socials' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('socials')}>Socials</Nav.Link>
                </span>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    )
    }