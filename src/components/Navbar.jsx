import React,{useState , useContext} from 'react'
import { Link , useParams} from "react-router-dom";
import { States } from '../context/noteState';
// import NoteState from '../context/noteState';

const Navbar = (props) => {
    
    const {colorMode , clicking , icon} = useContext(States);
  return (
    <>
         <header style={colorMode}>
          <nav className={`navbar navbar-expand-lg navbar-${colorMode.text} bg-${colorMode.text}`}>
            <div className="container">
              <Link className="navbar-brand" to="#">
                Where in the world?
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse container"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <div
                      className=""
                      aria-current="page"
                      to="#"
                      onClick={clicking}
                    >
                      {icon ? (
                        <span>
                          <i className="fa-solid fa-moon"></i> Dark Mode
                        </span>
                      ) : (
                        <span>
                          <i className="fa-regular fa-moon"></i> Light Mode
                        </span>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </>
  )
}

export default Navbar