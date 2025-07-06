import React from "react";
import "./App.css"; // Optional: your custom styles

function App() {
  return (
    <main className="container">
      <header>
        <h1>Thao Le</h1>
        <p className="subtitle">2nd Year @ Emory University</p>
        <p className="info">Business Administration + Integrated Visual Arts</p>
        <p className="info">Marketing Area Depth | Arts Management Concentration</p>
      </header>

      <section>
        <h2>Education</h2>
        <div className="edu-block">
          <h3>Emory University, Atlanta, GA</h3>
          <p>2025 - 2028 (Projected) | GPA: 3.74</p>
          <p>SAC Executive PR Chair, Project V Analyst</p>
        </div>
        <div className="edu-block">
          <h3>Raleigh Charter High School, NC</h3>
          <p>2021 - 2024 | GPA: 4.3</p>
          <p>Ethics Bowl, Track Captain, AAA Co-president</p>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>Undergraduate Research Assistant (2025 – present)</li>
          <li>Freelance Design & Research (2021 – present)</li>
          <li>Research Editing (2022 – 2024)</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          {[
            "Adobe Creative Suite", "Usability Testing", "Interviewing", "Figma",
            "Framer", "Canva", "ChatGPT"
          ].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Case Study: Parkers</h2>
        <p>
          Parkers is a platform helping users find seasonal jobs at U.S. national parks. 
          Inspired by my own struggle finding local travel-work opportunities, I researched 
          competitors like Workaway and Xanterra to uncover pain points and user motivations.
        </p>
        <ul>
          <li>Compared platforms like Pursuit, Worldpackers, Airbnb</li>
          <li>Created demographic personas and journey maps</li>
          <li>Built lo-fi wireframes inspired by Airbnb, LinkedIn, and YouTube</li>
        </ul>
        <p className="insight">
          Key insight: 20–24 year-olds prioritize affordability, housing, and safety. Parkers 
          addresses this through user-focused design, verified jobs, and optional video certs.
        </p>
      </section>

      <footer>
        <p>Last updated June 14, 2025</p>
      </footer>
    </main>
  );
}

export default App;