import { Link } from "react-router-dom"
import "../styles/HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unlock Your Potential with Online Learning</h1>
        <p>Discover thousands of courses taught by industry experts and take your skills to the next level.</p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn btn-primary">
            Explore Courses
          </Link>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-text">Courses</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5M+</span>
            <span className="stat-text">Students</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-text">Instructors</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="" alt="Students learning online" />
      </div>
    </section>
  )
}

export default HeroSection

