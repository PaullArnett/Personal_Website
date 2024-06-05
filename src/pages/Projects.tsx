import '/src/App.css'
import NavBar from '../components/NavBar';
import ProjectsText from '../components/ProjectsText';
import Projects1 from '../components/Project1';
import Projects2 from '../components/Project2';

function Projects() {
    return (
        <div className="Projects">
            <NavBar /> 
            <ProjectsText />
            <Projects1 />
            <Projects2 />
            <Projects1 />
            <Projects2 />
        </div>
    );
}

export default Projects;