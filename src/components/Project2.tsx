import '/src/App.css';

function Projects2() {
    return (
        <div className="project_container2">

            <video className='schooldash_demo' controls>
                <source src="SchoolDash_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='project_desc_container2'>
                <div className=''></div>
                <h1 className='project_name'>School Project OOP</h1> 
                <div className='project_desc'>
                    <h1 className='project_desc_text'> Using Codename One as a simulator, I built this 
                    from scratch using Java for a school project. Taught me a lot of what I know when
                     it comes to Object Oriented Programming and its methodologies.
                        <br /><br /><br />
                        Tech Stack: Java, CodenameOne
                        </h1>
                </div>
            </div>
        </div>

    );
}

export default Projects2;