"use client"

import { useState } from "react"
import CourseCard from "../components/CourseCard"
import "../styles/CoursesPage.css"

const CoursesPage = () => {
  // All courses data
  const allCourses = [
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
    {
      id: 4,
      title: "Graphic Design Fundamentals",
      instructor: "Sarah Williams",
      level: "Beginner",
      price: 44.99,
      image: "",
    },
    {
      id: 5,
      title: "JavaScript for Beginners",
      instructor: "John Smith",
      level: "Beginner",
      price: 49.99,
      image: "",
    },
    {
      id: 6,
      title: "Advanced CSS Techniques",
      instructor: "Lisa Brown",
      level: "Intermediate",
      price: 59.99,
      image: "",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")

  // Filter courses based on search
  const filteredCourses = allCourses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>All Courses</h1>
        <p>Find the perfect course for you</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
        ) : (
          <p className="no-courses">No courses found. Try a different search term.</p>
        )}
      </div>
    </div>
  )
}

export default CoursesPage

