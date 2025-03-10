import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>LearnEasy</h3>
          <p>Simple online learning platform for everyone.</p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@learneasy.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LearnEasy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

