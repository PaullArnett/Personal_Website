import '/src/App.css';

function Projects1() {
    return (
        <div className="project_container">
            <div className='project_desc_container'>
                <h1 className='project_name'>Geometry Gunner</h1> 
                <div className='project_desc'>
                    <h1 className='project_desc_text'>Introducing Geometry Gunner, my first completed coding project! Take control of a square armed with a gun in 
                        this fast-paced arcade game. Your goal? Shoot down as many enemy triangles without getting touched.
                        <br /><br /><br />
                        Tech Stack: Unity, C#
                        </h1>
                </div>           
            </div>

            <video className='geometry_demo' controls width="640" height="360">
                <source src="Geometry_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>

    );
}

export default Projects1;