import "../styles/FeatureSection.css"

const FeatureSection = () => {
  const features = [
    {
      icon: "fas fa-laptop",
      title: "Learn Anywhere",
      description: "Access courses on any device, anytime, anywhere.",
    },
    {
      icon: "fas fa-certificate",
      title: "Certification",
      description: "Earn certificates upon completion of courses.",
    },
    {
      icon: "fas fa-users",
      title: "Expert Instructors",
      description: "Learn from industry professionals and experts.",
    },
    {
      icon: "fas fa-clock",
      title: "Lifetime Access",
      description: "Pay once and access your courses forever.",
    },
  ]

  return (
    <section className="feature-section">
      <div className="section-header">
        <h2>Why Choose LearnHub?</h2>
        <p>We provide the best online learning experience with numerous benefits</p>
      </div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection

