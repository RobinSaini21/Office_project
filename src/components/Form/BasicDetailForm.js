import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./BasicDetailForm.css";
import FormCalendar from "../Calendar/Calender";
import axios from "axios";

function BasicDetailForm() {
  const [user, setUser] = useState({
    pan: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    fathername: "",
    mobilenumber: "",
    aadharnum: "",
  });
  // const handleChange = (e) => {
  //   const { pan, value } = e.target;
  //   setUser({
  //     ...user,
  //     [pan]: value,
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const [gender, setGender] = useState("");

  const selectGender = (value) => {
    setGender(value);
  };
  const register = (e) => {
    const pan = user.pan
  const email = user.email 
   const firstname =  user.firstname 
    const middlename = user.middlename 
    const lastname =  user.lastname 
    const fathername = user.fathername 
    const mobilenumber =  user.mobilenumber
     const aadharnum = user.aadharnum 
    const basicuser = {
        pan ,
        email,
        firstname,
        middlename,
        lastname,
        fathername,
        mobilenumber,
        aadharnum,
        gender,};
    if (
      pan &&
      email &&
      firstname &&
      middlename &&
      lastname &&
      fathername &&
      mobilenumber &&
      aadharnum &&
      gender
    ) {
      axios.post("http://localhost:5000/userbasicdetails", basicuser)
      // "http://localhost:5000/userbasicdetails"
        //`${process.env.REACT_APP_REGISTER_API_URL}`,
        // process.env.REACT_APP_BASICUSER_REST_API_URL
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  };
  return (
    <div>
      <div className="form_detail">
        <div className="basicForm">
          <div className="basic_text">
            <h3>Let's start with your basic details</h3>
               </div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="PAN"
                placeholder="PAN"
                name="pan"
                value={user.pan}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <FormCalendar />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="Email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="FirstName"
                placeholder="First Name"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="MiddleName"
                placeholder="Middle Name"
                name="middlename"
                value={user.middlename}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                type="LastName"
                placeholder="Last Name"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <select className="mb-4" name="cars" id="cars">
              <optgroup label="Select">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </optgroup>
            </select> */}
            <Form.Group className="mb-3">
            <select
              className="w-100"
              value={gender}
              onChange={(e) => selectGender(e.target.value)}
            >
              
              <option value="" >
                --Please choose an option--
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

              
            </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="Father's Name"
                placeholder="Father's Name"
                value={user.fathername}
                name="fathername"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="Number"
                placeholder="Mobile Number"
                name="mobilenumber"
                value={user.mobilenumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="Number"
                placeholder="12 digit Aadhar Number"
                name="aadharnum"
                maxlength="12"
                value={user.aadharnum}
                onChange={handleChange}
              />
            </Form.Group>
{/* <button className="btn_1">Cancel</button> */}
            <button className="btn_1" type="submit" onClick={register}>
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default BasicDetailForm;
