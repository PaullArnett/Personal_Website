import '/src/App.css';

function HomeIcons() {
    return (
        <div className="home_icon_container">
            <a href="https://github.com/PaullArnett" target="_blank" rel="noopener noreferrer">
                <img src="github.svg" className="home_icon"  alt="..."></img>
            </a>
            <a href="https://linkedin.com/in/paul-arnett-694b6a272/" target="_blank" rel="noopener noreferrer">
                <img src="linkedin.svg" className="home_icon linkedin_icon"  alt="..."></img>
            </a>
            <a href="https://example.com/resume" target="_blank" rel="noopener noreferrer">
                <img src="resume-icon.svg" className="home_icon"  alt="..."></img>
            </a>
        </div>
    );
}

export default HomeIcons;