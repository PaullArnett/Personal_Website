import '/src/App.css';

function Skills() {
    return (
        <div className="about_container">
            <h1 className='about_name'>Skills & Experience</h1>
            <div className="horizontal_line"></div>
            <div className='skill_container_row'>
                <div className='skill_icons_container'>
                    <h1 className='skill_name'>Object Oriented</h1>
                    <div className="horizontal_line"></div>
                    <div className='skill_row'>
                        <img src="java.svg" className="skill_icon"  alt="..."></img>
                        <img src="python.svg" className="skill_icon"  alt="..."></img>
                    </div>
                    <div className='skill_row'>
                        <img src="c.svg" className="skill_icon"  alt="..."></img>
                        <img src="c-plusplus.svg" className="skill_icon"  alt="..."></img>
                    </div>
                </div>
                <div className='skill_icons_container'>
                    <h1 className='skill_name'>Web Dev</h1>
                    <div className="horizontal_line"></div>
                    <div className='skill_row'>
                        <img src="html-5.svg" className="skill_icon"  alt="..."></img>
                        <img src="css-3.svg" className="skill_icon"  alt="..."></img>
                        <img src="typescript-icon.svg" className="skill_icon"  alt="..."></img>
                    </div>
                    <div className='skill_row'>
                        <img src="javascript.svg" className="skill_icon"  alt="..."></img>
                        <img src="react.svg" className="skill_icon"  alt="..."></img>
                    </div>
                </div>
            </div>   
            <div className='skill_container_row'>
                <div className='skill_icons_container '>
                    <h1 className='skill_name'>Database</h1>
                    <div className="horizontal_line"></div>
                    <div className='skill_row'>
                        <img src="mysql.svg" className="skill_icon_larger"  alt="..."></img>
                        <img src="mongodb.svg" className="skill_icon_larger mongodb"  alt="..."></img>
                    </div> 
                </div> 
            </div>                      
        </div>
    );
}

export default Skills;