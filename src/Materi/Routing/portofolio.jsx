import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portofolio';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Portfolio = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>  {/* Changed to Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutme">About Me</Link>  {/* Changed to Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/portfolio">Portfolio</Link>  {/* Changed to Link, note 'active' is handled differently */}
          </li>
        </ul>
      </nav>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img 
                  src={`https://picsum.photos/500/300?random=${index + 1}`}
                  alt={`Project Image ${index + 1}`}
                  className="card-img-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
