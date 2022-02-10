import React from "react";
import './Section_1.css'
import Register from "../../register/Register";
import { Link } from "react-router-dom";


function Section_1() {
  return (
    <div>
      {/* <Croutes/> */}
      <section className="File_In_2">
        <div className="Flie_In">
          <h1>File Income-tax return with ease</h1>
          <span className="eRi">
            <p>
              Registered eRI of Income-tax Department <br/><b>28,35,349</b> users and
              counting
            </p>
          </span>
        </div>
        <div className="Easy_ways">
          <p>3 easy ways to file</p>
        </div>
        <div className="btn_new" >
          <div className="btn_vio">
            <Link to="/login">
            <button className="btn_blk" >Quick File Return</button>
            </Link>
            <br/>
            <span className="btm_txt">
                Pre-fetch tax data and continue filing
            </span>
          </div>
          <div className="btn_vio">
            <button className="btn_vi">Upload Form-16</button>
            <br/>
            <span className="btm_txt">
                Upload form 16 PDF and finish qucikly
            </span>
          </div>
          <div className="btn_vio">
          <Link to="/login">
            <button className="btn_grn" >Easy Self Filing</button>
            </Link>
            <br/>
            <span className="btm_txt">
                Answere simple question and file with ease
            </span>
          </div>
        </div>
        <div>
        <Link to="/login">Existing Users</Link>
    
        </div>
      </section>
    </div>
  );
}

export default Section_1;
