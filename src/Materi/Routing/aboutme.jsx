import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutme.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const AboutMe = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>  {/* Change to Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/aboutme">About Me</Link>  {/* Change to Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>  {/* Change to Link */}
          </li>
        </ul>
      </nav>

      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-lg-6 img-column">
            <img 
              src="https://www.sweetwater.com/insync/media/2022/01/Ways-to-Make-Your-Studio-look-as-Good-as-it-Sounds-Featured-Image-1050x550.jpg" 
              alt="Creative Workspace" 
              className="img-fluid rounded" />
          </div>
          <div className="col-lg-6 text-column">
            <h2>I have worked with studios such as:</h2>
            <ul>
              <li>the Schuester Digital Media Group,</li>
              <li>Oddball Imaging Studio,</li>
              <li>Corentin Design Co.,</li>
              <li>and Studio Ralla.</li>
            </ul>
            <p>I received my Graphic Design degree from De Loureigh University.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
