import './App.css';
import profile from './profile.jpeg';
import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav>
        <h2>Portfolio</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="profile-frame">
          <img src={profile} alt="profile" className="profile-img" />
        </div>

        <div className="hero-text">
          <h1>Ragini Iloni</h1>
          <h2>Frontend Developer</h2>

          <p>
            Passionate Computer Science student building modern web apps using React,
            exploring Data Analysis, Cyber Security and Machine Learning basics.
          </p>
          <button>Download Resume</button>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="split-section">
        <h2 className="section-title">About Me</h2>

        <div className="section-content">
          <div className="project-card">
            <p>
              I am a B.Tech 3rd year Computer Science Engineering student with a strong interest in web development, data analysis, databases, operating systems, computer networks, and cybersecurity.
              I have hands-on experience in building frontend projects and I am actively learning backend development and full-stack technologies.
              I am passionate about applying my technical skills to real-world projects and continuously improving through internships and practical exposure.
            </p>
          </div>

          <div className="project-card">
            <ul>
              <li>Web Developer</li>
              <li>UI/UX Designer</li>
              <li>Data Enthusiast</li>
              <li>Machine Learning Enthusiast</li>
              <li>Cyber Security Enthusiast</li>
              <li>Problem Solver</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="split-section">
        <h2 className="section-title">Education</h2>

        <div className="section-content">

          <div className="project-card">
            <h3>B.Tech (CSE) //currently pursuing</h3>
            <p>SR University
              Ananthasagar, Hanamkonda-506001
            </p>
            <span>CGPA: 9.5</span>
          </div>

          <div className="project-card">
            <h3>Intermediate</h3>
            <p>Meluha Junior College
              Gandhipet,Hyderabad-500001
            </p>
            <span>95.6%</span>
          </div>

          <div className="project-card">
            <h3>10th Class</h3>
            <p>Government High School Krishnacolony
              Girmajipet,Warangal-506002
            </p>

            <span>98%</span>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="split-section">

        <h2 className="section-title">Skills & Interests</h2>

        <div className="section-content">

          <div className="project-card">
            <h3>Web Development</h3>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Programming</h3>
            <ul className="skills-list">
              <li>C Programming</li>
              <li>Python</li>
              <li>Data Structures</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Core CS Subjects</h3>
            <ul className="skills-list">
              <li>DBMS</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Data & Interests</h3>
            <ul className="skills-list">
              <li>Data Analysis</li>
              <li>Machine Learning </li>
              <li>Competitive Programming</li>
              <li>Cloud Computing</li>
              <li>UI/UX Design</li>
              <li>AWS Basics</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="split-section">
        <h2 className="section-title">Projects</h2>

        <div className="section-content">

          <div className="project-card">
            <h3>Student Management System</h3>
            <p>Developed a system to manage student records including adding, updating, and viewing student details.
              Focused on efficient data handling and basic CRUD operations to improve academic data organization.</p>
          </div>

          <div className="project-card">
            <h3>Mobile App UI Design</h3>
            <p>Designed user-friendly mobile application interfaces with a focus on clean layout, usability, and modern UI principles.
               Created interactive screens to enhance user experience and visual appeal using figma tool.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Built a responsive personal portfolio website using web technologies to showcase skills, projects, and contact information.
              Designed with a focus on clean UI, smooth navigation, and mobile responsiveness.</p>
          </div>

          <div className="project-card">
            <h3>Plant Health Detection By colours</h3>
            <p>Developed a basic plant health detection system using color-based analysis to identify plant conditions.
              The project helps in understanding image processing concepts and early disease detection techniques.</p>
          </div>

          <div className="project-card">
            <h3>Impact of screentime on Human Mental Health</h3>
            <p>Developed a machine learning-based project to analyze the impact of screen time on student's mental health.
              The model processes input features such as daily screen usage, sleep patterns, and study habits to predict potential mental health risks like stress, anxiety, and reduced concentration. Implemented data preprocessing, feature selection, and basic classification techniques to generate meaningful insights.
              The project demonstrates the application of machine learning in healthcare-related behavioral analysis.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="split-section">

        <h2 className="section-title">Contact</h2>

        <div className="section-content">

          <div className="project-card">

            <p>📞 <a href="tel:+916281187433">6281187433</a></p>

            <p>📧 <a href="mailto:raginibhaskariloni@gmail.com">
              raginibhaskariloni@gmail.com
            </a></p>

            <p>
              🔗 <a href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>

            <p>
              💻 <a href="https://github.com"
                target="_blank"
                rel="noopener noreferrer">
                GitHub Profile
              </a>
            </p>

          </div>

        </div>
      </section>


      {/* CONTACT (MongoDB connected) */}
      <section id="contact" className="split-section">

        <h2 className="section-title">Contact Me</h2>

        <form className="project-card" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>

        </form>

      </section>

    </div>

  );
}

export default App;