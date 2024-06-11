import '/src/App.css';

function AboutMe() {
    return (
        <div className="about_container">
            <img src="SelfPortrait.jpg" className="img-fluid rounded-circle portrait_container_small" style={{ width: '170px', height: '170px' }} alt="..."></img>
            <h1 className='about_name'>Paul Arnett</h1>
            <div className="horizontal_line"></div>

            <div className='about_contacts'>
                <img src="telephone.svg" className="about_icon"  alt="..."></img>
                <h1 className='about_contacts_text'>(530)448-7692</h1>
                <img src="envelope.svg" className="about_icon"  alt="..."></img>
                <h1 className='about_contacts_text'>Paull.arnett@gmail.com</h1>
                <img src="globe.svg" className="about_icon"  alt="..."></img>
                <h1 className='about_contacts_text'>www.PaulArnett.com</h1>
            </div>
            <div className="horizontal_line"></div>

            <div className="about_body">
                <div className="about_left_column">
                    <div className='about_header'>
                        <img src="person-circle.svg" className="about_header_icon"  alt="..."></img>
                        <h1 className='about_header_title'>About Me</h1>
                    </div>
                    <h1 className='about_contacts_text'><br/>My goal is to obtain an internship position as a 
                    software engineer, where I can apply my knowledge and skills in a practical setting, learn 
                    from experienced professionals, and contribute to meaningful projects in the software industry.
                    </h1>
                    <div className="horizontal_line_full"></div>

                    <div className='about_header'>
                        <img src="book.svg" className="about_header_icon"  alt="..."></img>
                        <h1 className='about_header_title'>Education</h1>
                    </div>
                    <h1 className='about_contacts_text'>
                    <span className="bold"><br/>Bachelor of Science in Computer Science </span> <br/>
                    California State University, Sacramento<br/>
                    Graduating May 2025<br/><br/>

                    <span className="bold">Sierra College </span><br/>
                    Dean's List, GPA: 3.8 <br/><br/>

                    <span className="bold">Foresthill High School</span><br/>
                    Salutatorian, GPA:  4.0<br/><br/>
                    </h1>

                </div>

                <div className='vertical_line'></div>
                
                <div className="about_right_column">
                    <div className='about_header'>
                        <img src="clipboard2-check.svg" className="about_header_icon"  alt="..."></img>
                        <h1 className='about_header_title'>Soft Skills</h1>
                    </div>
                    <h1 className='about_contacts_text line_spacing'>
                    Critical Thinking<br/>
                    Time management<br/>
                    Good communication<br/>
                    Teamwork<br/>
                    Adaptability<br/>
                    Trouble Shooting<br/>
                    </h1>
                    <div className='about_header'>
                        <img src="trophy.svg" className="about_header_icon"  alt="..."></img>
                        <h1 className='about_header_title'>Awards</h1>
                    </div>
                    <h1 className='about_contacts_text'>
                        <span className="bold">Sierra College:</span><br/>
                        Dean's List<br/>
                        Honor Roll<br/><br/>

                        <span className="bold">Foresthill High:</span><br/>
                        Salutatorian<br/>
                    </h1>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;