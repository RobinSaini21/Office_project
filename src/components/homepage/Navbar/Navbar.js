import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



function Navbar() {
  return (
    <div>
      <div className="NavBar">
        <div className="logo">
          <img src="https://myitreturn.com/c/images/myITreturn.png" alt="" />
        </div>

        <div className="Links">
          <ul>
            <li>
              {/* <Link  className= "Links_2" to="/service">SERVICE</Link> */}
              <div class="dropdown">
    <button class="dropbtn">SERVICES 

      <i class="fa fa-caret-down"></i>

    </button>
    <div class="dropdown-content">
      <a href="#">Assisted Filing</a>
      <a href="#">Notice Assistance</a>
      <a href="#">Tax Planning</a>
    </div>
  </div> 
            </li>
            <li>
              {/* <Link to="/aboutus">ABOUT US</Link> */}
              ABOUT US
            </li>
            <li>
              {/* <Link to="/pricing">PRICING</Link> */}
              PRICING
            </li>
            <li>
              {/* <Link to="/help">HELP</Link> */}
              HELP
            </li>
            <li>
              <Link to="/register" className="link">SIGN IN</Link>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
