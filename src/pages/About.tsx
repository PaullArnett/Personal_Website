import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

import '/src/App.css'

function About() {
    return (
        <div className="About">
            <NavBar /> 
            <AboutMe />
            <Skills />
        </div>
    );
}

export default About;