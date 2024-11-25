import React from 'react';
import './Studentportal.css';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';

function StudentPortal() {
  return (
    <>
  <div className="student">
    <img src={logo} alt="logo" className="logo" />
  </div>
  <div className="tag">
    <h2>Student Portal</h2>
  </div>
  <div className="button">
    <button className="btn">
      <Link to="/HTML/team_join_form.html">My Team</Link>
      {/* This will route to team_view page once a student is in the team */}
      {/*  */}
    </button>
    <button className="btn">
      <Link to="/HTML/student_project_status.html">My Progress</Link>
    </button>
    {/* Only to be shown to leaders of the team */}
    <button className="btn">
      <Link to="/HTML/student_form_submission.html">Form Submissions</Link>
    </button>
    <button className="btn">
      <Link to="/HTML/project_details_filling.html">Fill Project Details</Link>
    </button>
  </div>
</>
  );
}

export default StudentPortal;