import './Header.css';
import logo from '../assets/image.png';

function Header() {
    return (
        <div>
            <header className="header">
                <div className="logo-section">
                    <img src={logo} alt="School Logo" className="logo" />
                    <div className="school-name">
                        <h1>GMHSS</h1>
                    </div>
                </div>
                <nav className="nav">
                    <div>
                        <p>Courses | Alumni | Admission Registration</p><hr />
                    </div>
                    <div>
                        <a href="#">HOME</a>
                        <a href="#">ABOUT US</a>
                        <a href="#">INFRASTRUCTURE</a>
                        <a href="#">ACADEMICS</a>
                        <a href="#">ADMISSION</a>
                    </div>
                </nav>
                <button className="contact-btn">CONTACT US</button>
            </header>
        </div>
    );
}

export default Header;