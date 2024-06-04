import '/src/App.css';

function NavBar() {
    return (
        <ul className="nav nav-underline toolbar">
            <li className="nav-item">
                <a className="nav-link toolbar_item active" aria-current="page" href="Home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link toolbar_item" href="Projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link toolbar_item" href="About">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link toolbar_item" href="Contact">Contact</a>
            </li>
        </ul>
    );
}

export default NavBar;