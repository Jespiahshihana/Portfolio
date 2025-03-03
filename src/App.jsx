import './App.css'

function App() {
  return (
    <>
      <div className="navbar">
        <h1 className="name">
          <span className="first-name">Jespiah</span> <span className="second-name">Shihana</span>
        </h1>
        <nav>
          <ul className="nav-list">
            <li className="nav1"><a href="#">Education</a></li>
            <li className="nav1"><a href="#">Skills</a></li>
            <li className="nav1"><a href="#">Experience</a></li>
            <li className="nav1"><a href="#">Profile</a></li>
            <li className="nav1"><a href="#">Portfolio</a></li>
            <li className="nav1"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <section id="banner-bg">
        <div className="bg-blur"></div>
        <div className="banner">
          <div className="intro">
            <h1 className="intro-l1">HI, I AM </h1>
            <h1 className="intro-l1">JESPIAH SHIHANA</h1>
            <p>UI/UX DESIGNER AND WEB DEVELOPER</p>
          </div>
          <button className="button">Download Resume</button>
        </div>
      </section>

      <h2 className="intro-heading">About Me</h2>

      <section id="about_me">
        <div className="imp_me">
          <p className="maincont">I am UI/UX Designer and Web developer...</p>
          <p className="subcont">Lorem ipsum dolor sit amet...</p>
          <hr />
          <div className="con-details">
            <div className="Phone">
              <h4>Phone</h4>
              <p>+91 6383349837</p>
            </div>
            <div className="Email">
              <h4>Email</h4>
              <p>jespiahshihana@gmail.com</p>
            </div>
            <div className="Website">
              <h4>Website</h4>
              <p>www.jespiahshihana.com</p>
            </div>
          </div>
        </div>
        <div className="image-align">
          <img src="img/girll.jpg" width="400px" alt="Profile" />
        </div>
      </section>

      <section className="timeline">
        <h2 className="timeline-title">EDUCATION</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2008 - 2015</h3>
              <p>Kindergarten - Secondary</p>
              <h4>Bethlahem Matric Higher Secondary School</h4>
              <p>Karungal</p>
              <p>Duis aute irure dolor...</p>
            </div>
            <span className="timeline-dot"></span>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2015-2023</h3>
              <p>Secondary - High School</p>
              <h4>St. Michael's Matric Higher Secondary School</h4>
              <p>Kattathurai</p>
              <p>Duis aute irure dolor...</p>
            </div>
            <span className="timeline-dot"></span>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>2023-2027</h3>
              <p>Bachelor of Computer Science Engineering</p>
              <h4>Saveetha Engineering College</h4>
              <p>Chennai</p>
              <p>Duis aute irure dolor...</p>
            </div>
            <span className="timeline-dot"></span>
          </div>
        </div>
      </section>

      <section id="skills-sec">
        <div className="skill-title">SKILLS</div>
        <div className="skill-container">
          <div className="skill-column">
            
              <div className="skill"><span>Adobe Photoshop</span></div>
              <div className="progress-bar"><div className="progress" style={{ "width": "90%" }}></div></div>

              <div className="skill"><span>Adobe Illustrator</span></div>
              <div className="progress-bar"><div className="progress" style={{"width": "85%" }}></div></div>

              <div className="skill"><span>Adobe After Effects</span></div>
              <div className="progress-bar"><div className="progress" style={{ "width": "97%" }}></div></div>

              <div className="skill"><span>Sketch</span></div>
              <div className="progress-bar"><div className="progress" style={{ "width": "90%" }}></div></div>
            

            
              <div className="skill"><span>HTML 5</span></div>
              <div className="progress-bar"><div className="progress" style={{"width": "92%" }}></div></div>

              <div className="skill"><span>CSS3 Animation</span></div>
              <div className="progress-bar"><div className="progress" style={{ "width": "95%" }}></div></div>

              <div className="skill"><span>Communication</span></div>
              <div className="progress-bar"><div className="progress" style={{"width": "98%" }}></div></div>
           
          </div>
        </div>
      </section>

      <section id="details">
        <h2 style={{ "textAlign": "center" }}>CONTACT ME</h2>
        <div className="detail">
          <div className="detail-area">
            <input type="text" placeholder="Enter name" required /><br />
            <input type="email" placeholder="Enter Email" required /><br />
            <input type="text" placeholder="Subject" /><br />
            <input type="text" placeholder="Message" /><br />
            <div className="button-sub"><button>Submit</button></div>
          </div>

          <div className="contact-me">
            <div className="namee">
              <h3>Jespiah Shihana</h3>
              <p style={{ "color": "#333" }}>UI/UX Designer</p>
            </div>
            <div className="phone">
              <h3>Phone no</h3>
              <p style={{ "color": "#333" }}>6383349837</p>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p style={{ "color": "#333" }}>jespiahshihana@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
