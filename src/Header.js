import React from 'react';
import './Navbar+Footer+etc.css';
const Header = () => {
    return (
        <div className='header'>
           <img src="/Gohackathonlogo.png" alt="Go Hackathon Logo" />

            <div className="nav">
                <ul>
                    <li><a href="../Home/hero-section.html"><span style={{fontSize: 'large'}}><i className='fa fa-home'></i></span></a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="../Training/weekdays.html">Training <i className="fas fa-caret-down"></i></a>
                        <div>
                            <ul className="dropdown">
                                <div className="dropdown-1">
                                    <li><a href="#" style={{color: '#0071D1'}}>4P Program</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="../Training/preparation.html" style={{color: '#0071D1'}}>Preparation</a></li>
                                            <li><a href="../Training/project.html" style={{color: '#0071D1'}}> Project</a></li>
                                            <li><a href="../Training/professional.html" style={{color: '#0071D1'}}>Professional</a></li>
                                            <li><a href="../Training/placement.html" style={{color: '#0071D1'}}>Placement</a></li>
                                        </ul>
                                    </li>
                                </div>
                                <div className="dropdown-1">
                                    <li><a href="#" style={{color: '#0071D1'}}>Fullstack development</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="../Training/pythonfullstack.html" style={{color: '#0071D1'}}>Python Full Stack</a></li>
                                            <li><a href="../Training/javafullstack.html" style={{color: '#0071D1'}}>Java Full Stack </a></li>
                                            <li><a href="../Training/mernfullstack.html" style={{color: '#0071D1'}}>Mern Full Stack</a></li>
                                        </ul>
                                    </li>
                                </div>
                                <div className="dropdown-1">
                                    <li><a href="#" style={{color: '#0071D1'}}>Ui/UX Designing</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="../Training/html,css,js.html" style={{color: '#0071D1'}}>HTML, CSS & JS</a></li>
                                            <li><a href="../Training/figma.html" style={{color: '#0071D1'}}>Figma</a></li>
                                            <li><a href="../Training/reactjs.html" style={{color: '#0071D1'}}>React JS</a></li>
                                        </ul>
                                    </li>
                                </div>
                                <div className="dropdown-1">
                                    <li><a href="#" style={{color: '#0071D1'}}>Advanced Learnings</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="../Training/cybersecurity.html" style={{color: '#0071D1'}}>Cyber Security</a></li>
                                            <li><a href="../Training/testing.html" style={{color: '#0071D1'}}>Testing</a></li>
                                            <li><a href="../Training/ai&ml.html" style={{color: '#0071D1'}}>AI & ML</a></li>
                                        </ul>
                                    </li>
                                </div>
                                <div className="dropdown-1">
                                    <li><a href="#" style={{color: '#0071D1'}}>Professional Development</a>
                                        <ul className="sub-dropdown">
                                            <li><a href="../Training/communicationskills.html" style={{color: '#0071D1'}}>Communication Skills & Aptitude</a></li>
                                            <li><a href="../Training/entryuniversityprogram.html" style={{color: '#0071D1'}}>Entry University Program</a></li>
                                            <li><a href="../Training/finishuniversityprogram.html" style={{color: '#0071D1'}}>Finish University Program</a></li>
                                        </ul>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Services <i className="fas fa-caret-down"></i> </a>
                        <div>
                            <ul className="dropdown">
                                <li><a href="#" style={{color: '#0071D1'}}>Workshops</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Webinars</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Startup Mentorship Program</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Hackathons</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Internships</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Projects</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Placement Support</a></li>
                                <li><a href="#" style={{color: '#0071D1'}}>Research</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="../Career/career.html">Career</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Login/SignUp</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
