import '/src/App.css';

function CenterPicture() {
    return (
        <div className="portrait_container">
            <img src="SelfPortrait.jpg" className="img-fluid rounded-circle" style={{ width: '450px', height: '450px' }} alt="..."></img>
        </div>
    );
}

export default CenterPicture;