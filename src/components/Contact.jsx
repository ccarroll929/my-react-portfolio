import { Container} from "react-bootstrap";

import socialIcon1 from '../assets/img/linkedin-icon.png';
import socialIcon2 from '../assets/img/github-icon.png';

export const Contact = () => {
    return (
    <footer className="contact" id="contact">
        <Container>
            <div>
                <h4>Contact Me</h4>
                <h5>Email: ccarroll0528@gmail.com</h5>
                <h5>Phone: 832-531-5845</h5>
            </div>
            <div className="social-icon">
                <h4>Social Links</h4>
                <h5><a href="https://www.linkedin.com/in/christina-carroll-504875304/"><img src={socialIcon1} alt="Icon" /></a>
                <a href="https://github.com/ccarroll929"><img src={socialIcon2} alt="Icon" /></a></h5>
            </div>
        </Container>
    </footer>
    )
}