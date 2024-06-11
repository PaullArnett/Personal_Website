import '/src/App.css'
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <div className="Contact">
            <NavBar /> 
            <ContactForm />
        </div>
    );
}

export default Contact;