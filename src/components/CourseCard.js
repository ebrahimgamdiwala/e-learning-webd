import "../styles/CourseCard.css"

const CourseCard = ({ course }) => {
  const { title, instructor, level, price, image } = course

  return (
    <div className="course-card">
      <div className="course-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="course-content">
        <h3>{title}</h3>
        <p className="instructor">by {instructor}</p>
        <p className="level">{level}</p>
        <div className="course-footer">
          <span className="price">${price}</span>
          <button className="enroll-btn">Enroll</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

