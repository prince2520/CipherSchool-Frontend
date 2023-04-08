import './AboutMe.scss'
import Button from "../../../Helper/Button/Button";

const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="about-me-section-top">
                <span>ABOUT ME</span>
                <Button/>
            </div>
            <div className="about-me-section-bottom">
                <textarea placeholder="Add Something about you."/>
            </div>
        </div>

);
}

export default AboutMe;