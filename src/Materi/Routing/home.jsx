import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>  {/* Changed to Link */}
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/aboutme">About Me</Link>  {/* Changed to Link */}
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>  {/* Changed to Link */}
            </li>
        </ul>
      </nav>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Agnes Erika</h1>
            <h2>Freelance Graphic Designer</h2>
            <p>
              For over 12 years, I've been capturing people, places, and perspectives
              through film and digital photography.
              My favorite projects are people-related.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://i.ytimg.com/vi/2kJVHMAblfk/maxresdefault.jpg"
              alt="Placeholder"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
