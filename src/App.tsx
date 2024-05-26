import CenterPicture from "./components/CenterPicture";
import NavBar from "./components/NavBar";
import HomeText from "./components/HomeText";
import HomeIcons from "./components/HomeIcons";
import FindOutMore from "./components/FindOutMore";
import '/src/App.css'

function App() {
    return (
        <div className="App">
            <NavBar /> 
            <HomeText />
            <CenterPicture />
            <HomeIcons />
            <FindOutMore />
        </div>
    );
}

export default App;