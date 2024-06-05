import '/src/App.css';

function AboutMe() {
    return (
        <div className="about_container">
            <img src="SelfPortrait.jpg" className="img-fluid rounded-circle portrait_container_small" style={{ width: '170px', height: '170px' }} alt="..."></img>
            <h1 className='about_name'>Paul Arnett</h1>
            <div className="horizontal-line"></div>
            <div className='about_contacts'>
                <img src="telephone.svg" className="about_icon"  alt="..."></img>
                <h1 className='about_contacts_text'>(530)448-7692</h1>
                <img src="envelope.svg" className="about_icon"  alt="..."></img>
                <h1 className='about_contacts_text'>Paull.arnett@gmail.com</h1>
                <img src="globe.svg" className="about_icon"  alt="..."></img>
                <h1 className='about_contacts_text'>www.PaulArnett.com</h1>
            </div>
            <div className="horizontal-line"></div>

        </div>
    );
}

export default AboutMe;