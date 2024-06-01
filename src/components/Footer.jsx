import { Container} from "react-bootstrap";
import socialIcon1 from '../assets/img/linkedin-icon.png';
import socialIcon2 from '../assets/img/github-icon.png';

// Function that returns social icons embedded with links to my social profiles
export const Footer= () => {
    return (
    <footer className="socials" id="socials">
        <Container>
            <div className="social-icon">
                <h4>Social Media Links</h4>
                <p> Click an icon below to visit my LinkedIn and GitHub profiles!</p>
                    <div className="icons"><a href="https://www.linkedin.com/in/christina-carroll-504875304/"><img src={socialIcon1} alt="Icon" /></a>
                        <a href="https://github.com/ccarroll929"><img src={socialIcon2} alt="Icon" /></a>
                    </div>
            </div>
        </Container>
    </footer>
    )
}