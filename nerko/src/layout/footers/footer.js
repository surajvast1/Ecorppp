import { Link } from "gatsby";
import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import './footer.css';


// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop();
}

const Footer = () => {
  return (
    <>
  <div className="bg-black">
    
      <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top box">
        

        <div className="col mb-3 ">
          <h5>START A BUSINESS</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 ">
              Partnership Firm Registration
              </a>
            </li> 
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Section 8 Company Registration
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Farmer Producer Company
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Nidhi Company Registration
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Startup India Registration
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>TRADEMARK & COPYRIGHT</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              International Trademark Registration
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              USA Trademark Registration
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Trademark Renewal
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Trademark Assignment
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Trademark Watch
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>CONVERT/CHANGE IN BUSINESS</h5>
          <ul className="nav flex-column">
            
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Partnership to LLP
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Private to One Person Company
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Private to Public Limited Company
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Change Objective of Business
              </a>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>LEGAL DOCUMENTATION</h5>
          <ul className="nav flex-column">
            
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Term Sheet Agreement
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Share Purchase Agreement
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Non Compete Agreement
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Finance Agreement
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0  ">
              Freelancer Agreement
              </a>
            </li>
            
          </ul>
        </div>
      </footer>
    </div>
    </div>


    </>
  )
}

export default Footer
