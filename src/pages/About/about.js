import React from "react";
import "./about.css"; // Importing the CSS

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-header">
        About <span>C-Sync</span>
      </h2>
      <p className="about-text">
        In the heart of NIT Raipur, a campus buzzing with innovation and
        camaraderie, we identified a logistical challenge that needed
        addressing. With over 18 official clubs and committees, each hosting an
        average of 10 events per semester, the potential for overlapping events
        became a genuine concern. This meant nearly 180 events fighting for the
        limelight every semester, often leading to scheduling conflicts.
      </p>

      <div className="about_container">
        <h3 className="about-subheader">The Problem</h3>
        <p className="about-text">
          Despite the shared goal of enriching student life, these clashes often
          undermine the very essence of these events. The numbers don't lie:
          when events conflict, students are forced to choose, clubs get fewer
          attendees, and the overall experience is diluted.
        </p>
      </div>

      <div className="about_container">
        <h3 className="about-subheader">Our Solution: C-Sync (Club-Sync)</h3>
        <p className="about-text">
          Understanding this challenge, we introduced 'C-Sync,' a centralized
          platform dedicated to harmonizing event scheduling. Built using
          ReactJS, this web-app aims to streamline club events, ensuring that no
          two occasions overlap. By integrating with Google Forms and Google
          Sheet API, clubs can effortlessly submit details of their upcoming
          events, making it visible to the entire student body.
        </p>
      </div>

      <div className="about_container">
        <h3 className="about-subheader">Why C-Sync?</h3>
        <ul className="about-list">
          <li>
            <strong>For Clubs:</strong> Improved scheduling leads to better
            attendance, which translates into enhanced sponsorship opportunities
            and ultimately, superior events.
          </li>
          <li>
            <strong>For Students:</strong> No more dilemmas about which event to
            attend. C-Sync ensures students can maximize every opportunity,
            leading to skill enhancement and a stronger co-curricular profile.
          </li>
        </ul>
      </div>
      <div className="about_container">
        <h3 className="about-subheader">Conclusion</h3>
        <p className="about-text">
          C-Sync isn't just a scheduling tool; it's a commitment to enhancing
          the co-curricular landscape of NIT Raipur. By fostering better
          communication between clubs, committees, and students, we're ensuring
          a richer, more collaborative campus experience for everyone involved.
        </p>
      </div>
    </div>
  );
};

export default About;
