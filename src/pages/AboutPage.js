import "../styles/AboutPage.css"

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & CEO",
      image: "",
      bio: "Dr. Chen has over 15 years of experience in education technology. She founded LearnHub with a mission to make quality education accessible to everyone around the world.",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "",
      bio: "Michael leads our engineering team and has a background in building scalable educational platforms. He is passionate about using technology to enhance the learning experience.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Content",
      image: "",
      bio: "Sarah oversees our course development and ensures that all content meets our high standards of quality. She has a background in curriculum design and educational psychology.",
    },
    {
      name: "David Kim",
      role: "Chief Marketing Officer",
      image: "",
      bio: "David brings over a decade of marketing experience to LearnHub. He is dedicated to spreading our mission and connecting students with the right courses for their needs.",
    },
  ]

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about LearnEasy</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            LearnEasy was founded in 2020 with a simple mission: to make learning accessible to everyone. We started
            with just a few courses and have grown to offer dozens of courses across multiple subjects.
          </p>
          <p>
            Our team is passionate about education and believes that everyone should have the opportunity to learn new
            skills.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="" alt="Team Member" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="" alt="Team Member" />
              <h3>Jane Smith</h3>
              <p>Head of Content</p>
            </div>
            <div className="team-member">
              <img src="" alt="Team Member" />
              <h3>Mike Johnson</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

