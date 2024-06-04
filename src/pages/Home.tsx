import CenterPicture from "../components/CenterPicture";
import NavBar from "../components/NavBar";
import HomeText from "../components/HomeText";
import HomeIcons from "../components/HomeIcons";
import FindOutMore from "../components/FindOutMore";
import ProjectsText from "../components/ProjectsText";

import '/src/App.css'

function Home() {
    return (
        <div className="Home">
            <NavBar /> 
            <HomeText />
            <CenterPicture />
            <HomeIcons />
            <FindOutMore />
            <ProjectsText />
        </div>
    );
}

export default Home;