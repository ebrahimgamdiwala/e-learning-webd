import { Link } from "react-router-dom"
import CourseCard from "../components/CourseCard"
import "../styles/HomePage.css"

const HomePage = () => {
  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: "Web Development Basics",
      instructor: "John Smith",
      level: "Beginner",
      price: 49.99,
      image: "",
    },
    {
      id: 2,
      title: "Introduction to Python",
      instructor: "Jane Doe",
      level: "Beginner",
      price: 39.99,
      image: "",
    },
    {
      id: 3,
      title: "Digital Marketing 101",
      instructor: "Mike Johnson",
      level: "All Levels",
      price: 29.99,
      image: "",
    },
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Learn New Skills Online</h1>
          <p>Affordable courses for beginners and professionals</p>
          <Link to="/courses" className="browse-btn">
            Browse Courses
          </Link>
        </div>
      </section>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-container">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="view-all">
          <Link to="/courses" className="view-all-btn">
            View All Courses
          </Link>
        </div>
      </section>

      <section className="categories">
        <h2>Course Categories</h2>
        <div className="categories-container">
          <div className="category">
            <h3>Web Development</h3>
            <p>15 Courses</p>
          </div>
          <div className="category">
            <h3>Programming</h3>
            <p>12 Courses</p>
          </div>
          <div className="category">
            <h3>Digital Marketing</h3>
            <p>8 Courses</p>
          </div>
          <div className="category">
            <h3>Design</h3>
            <p>10 Courses</p>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get updates on new courses</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  )
}

export default HomePage

