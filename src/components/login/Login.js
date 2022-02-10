import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
import Facebook from "../GoogleLogin/FacebookLogin";
import { Link } from "react-router-dom";
import { Formik,Field } from "formik";
import { logindata } from "../../services/AuthApi";
import { useEffect } from "react";
import store from "../../Store";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Store/actions/AuthActions";


const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
   const user = localStorage.getItem("persist:persist-store")
//      useEffect(() => {
//  if(!user){
//    navigate("/register")}

//    else if (user){
//      navigate("/basicuser")
//    }
//  }
// })
// useEffect(() =>{
//   console.log(user)
//   if(!user){
//     navigate("/register")
//   }
//   else if(user){
//     navigate("/basicuser")
//   }
// })
  
  // const [user, setUser] = useState({
  //   name: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  // const handlePassword = (e) =>{
  //   const { password, value } = e.target;
  //   setUser({
  //     ...user,
  //     [password]: value,
  //   });
  // };

  // const login = () => {
  //   axios.post(process.evn.REACT_APP_LOGIN_API_URL, user).then((res) => {
  //     alert(res.data.message);
  //     setLoginUser(res.data.user);
  //     history.push("/");
  //   });
  // };

    const intialData = {
      email: "",
     password: "",
     
    }
    const registrationSchema = (values) => {
      const errors = {};
      if (!values.email) {
        document.getElementById("email").style.borderColor = "red"
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
        document.getElementById("password").style.borderColor = "red"
      }
      // else if(values.password.length  < 20){
      
      //   errors.password = "password must be 20 characters or less"
      // }
      // else if(values.password  != strongRegex ){
      //   errors.password = "Password is not strong enough"
      // }
    //  else if(!/\d/.test(values.password)){
    //    errors.password = "strong password"
    //  }
   
      return errors;
    }
  return (
    <div>
     
     <Formik
    
    initialValues={intialData}
    
    // validationSchema={Schema}
    validate={registrationSchema}
    onSubmit={(values, { setSubmitting }) => {
      // store.dispatch({
      //   type: "ADD_DETAILS",
      //   payload: { 
      //     email: values.email,
      //     password: values.password,
      //   },
      // });
     
        // 
      //   const user =  localStorage.getItem("persist:persist-store") 
    

    
// Product_Page()
      const email = values.email;
const password = values.password
     const ruser = {email, password } 
     axios.post("http://localhost:5000/Login", ruser).then((res) => {
       console.log(res)
       console.log(res.data)
        alert(res.data.message);
       const token = res.data.token
       console.log(token)

if(token){
  navigate("/basicuser")
} 
   console.log(
    dispatch(loginSuccess(email,token))
      )
    }); 
  
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
    
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
      /* and other goodies */
    }) => (
      <form className="TestForm" onSubmit={handleSubmit} >
        <div className="fb_login">
       <div className="fb">
         <Facebook />
       </div>
       <div className="ggl">
         <MyGoolgeLogin />
       </div>
       </div>
       <div className="OR_1">
       <h6>
         OR
       </h6>
     </div>
        <input
          className="Tes_inp"
         id="email"
       
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        
        />
        {/* <Field
        className="Tes_inp"
        id="email"
       type="email"
         name="email"
      
       /> */}
        <br />
     <span style={{color: "red"}}>{ errors.email}</span>
        <br />
        <input
        className="Tes_inp"
        id="password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {/* <Field
          className="Tes_inp"
          id="password"
            type="password"
            name="password"
        /> */}
        <br />
        {/* <p style={{color:"red"}}>{errors.password }</p> */}
        <span style={{color:"red"}}>{errors.password }</span>
        <br />
        {/* <input
        className="Tes_inp"
        id="password_confirm"
            type="confirm_password"
            name="confirm_password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.confirm_password}
          /> */}
          {/* <Field
           className="Tes_inp"
           id="password_confirm"
               type="confirm_password"
               name="confirm_password"
          /> */}
          <br/>
          <span class="error" style={{ color: "red" }}>
            {errors.confirm_password}
          </span>
          <br/>
        <button className="btn_4" type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <Link to={"/register"}>Create your myITreturn account</Link>
      {/* <Link>Forgot Password</Link> */}
      </form>
    )}
  </Formik>
    </div>
  );
};
export default Login;


// <div class="login_Sec">
// <div class="text-teal-600 ">
//     <h3>Sign in to your account</h3>
// </div>
// <div class="mt-8">
// <div className="fb_login">
//   <div className="fb">
//     <Facebook />
//   </div>
//   <div className="ggl">
//     <MyGoolgeLogin />
//   </div>
// </div>
//   <form action="#" autoComplete="off">
//     <div class="login_form">
//       <div class="flex relative ">
//         <input
//           type="text"
//           id="sign-in-email"
//           class="inp_0"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//           placeholder="Enter Email/Username"
//         />
//       </div>
//     </div>
//     <div class="">
//       <div class=" ">
//         <input
//           type="password"
//           id="sign-in-password"
//           class="inp_0"
//           name="Enter Password"
//         //   value={user.password}
//           onChange={handlePassword}
//           placeholder="Your password"
//         />
//       </div>
//     </div>
//     <div class="">
//       <div class="">
//         <a href="#" class="">
//           Forgot Your Password?
//         </a>
//       </div>
//     </div>
//     <div class="flex w-full">
//       <button
//         type="submit"
//         class="btn"
//         onClick={login}
//       >
//       NEXT
//       </button>
//     </div>
//   </form>
// </div>
// <div className="not_a">
// <p>Not a member</p>
// </div>
// <div>
// <Link to="/Register">
// <p>
//     Create you account
// </p>
// </Link>
// <div>
//     Forgot Password
// </div>
// </div>
// </div>