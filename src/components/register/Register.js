import axios from "axios";
import store from "../../Store";
import "./Register.css";
import Facebook from "../GoogleLogin/FacebookLogin";
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
// import CaptchaTest from "../Captcha/Captcha";
import {loadCaptchaEnginge,LoadCanvasTemplate, validateCaptcha,} from "react-simple-captcha";
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState,useRef ,useEffect} from 'react';
import CaptchaTest from "../Captcha/Captcha";
import { apiregister } from "../../services/AuthApi";


export default function Register() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        // confirm_password: ""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user, 
          [name]: value,
        });
      };
    
    
    // form validation rules 
    const validationSchema = Yup.object().shape({
      // email: Yup.string(),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
     const formOptions = { resolver: yupResolver(validationSchema) }
     // get functions to build form with useForm() hook
     const { register, handleSubmit, reset, formState } = useForm(formOptions);
     const { errors } = formState;

    const Formregister = (e) => {
      e.preventDefault();
   
       store.dispatch({
         type: "ADD_DETAILS",
         payload: { 
           email: user.email,
           password: user.password,
         },
       });

const Email = user.email;
const Password = user.password
       const ruser = {Email, Password }  
       apiregister(user)
      //  if (Email && Password) {
      //    axios.post(process.env.REACT_APP_REGISTER_API_URL,ruser)
      //    //`${process.env.REACT_APP_REGISTER_API_URL}`,
      //      .then((res) => console.log(res));
      //  } else {
      //    alert("invalid input");
      //  }
    };
//     function onSubmit(data) {
//     // Formregister()
//         // display form data on success
//         alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
//         return false;
        
//     }
// const submitHandle = () =>{

// }
    return (
        <div className="m-5">
            {/* <h5 className="card-header">React Hook Form - Password and Confirm Password Match Validation</h5> */}
            <div className="card-body">
            <div className="fb_login">
         <div className="fb">
           <Facebook />
         </div>
         <div className="ggl">
           <MyGoolgeLogin />
         </div>
       </div>
       
       {/* <hr className="hr1"/>
       <hr className="hr2"/> */}
       {/* <p className="OR_P">OR</p> */}
                <form  >
                {/* */}
                    <div className="form-row">
                    <input
                type="text"
                id="create-account-pseudo"
                className="int_1"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email*"
              />
                        <div className="form-group col">
                            {/* <label>Password</label> */}
                  {/* <input name="password"  id="create-account-pseudo" type="password" {...register('password')}  id=''  value={user.password} onChange={handleChange} className={`form-control ${errors.password ? 'is-invalid' : ''}`} /> */}
                  <input type="text"
               id="create-account-pseudo"
               className="int_1"
               name="password"
               type="password" {...register('password')}
               value={user.password} onChange={handleChange} className={` ${errors.password ? 'is-invalid' : ''}`}
               placeholder="Password*"
             />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="form-group col">
                            {/* <label>Confirm Password</label> */}
                                        <input
              type="password"
              id="create-account-pseudo"
              className="int_1"
              name="confirm_password"
              // value={user.password}
              // onChange={handleChange}
              type="password" {...register('confirmPassword')} className={`${errors.confirmPassword ? 'is-invalid' : ''}`}
              placeholder="Confirm Password*"
            /> 
                            {/* <input  id="create-account-pseudo"  name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} /> */}
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
                    </div>
                    <CaptchaTest/>
                    <div className="form-group">
                        {/* <button type="submit" className="btn btn-primary mr-1">Register</button> */}
                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                        <br/>
                        <button
                type="submit"
                className="btn"
                onClick={Formregister}
            
              >
                AGREE AND CONTINUE
              </button>
                    </div>
                </form>
            </div>
        </div>
    )
}







// const Register = () => {
//   const captchaRef1 = useRef(null);
//   const handleCaptcha1 = (e) => {
    
//     const captcha = captchaRef1.current.value;
//     if (validateCaptcha(captcha)) {
//       alert("true");
//     } else {
//       alert("false");
//     }
//   };
//   useEffect(() => {
//     loadCaptchaEnginge(7);
//   });
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     // confirm_password: ""
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user, 
//       [name]: value,
//     });
//   };

//   const register = (e) => {
//     e.preventDefault();
//     store.dispatch({
//       type: "ADD_DETAILS",
//       payload: { 
//         email: user.email,
//         password: user.password,
//       },
//     });

//     const {email, password } = user;
//     if (email && password) {
//       axios.post(process.env.REACT_APP_REGISTER_API_URL,user)
//       //`${process.env.REACT_APP_REGISTER_API_URL}`,
//         .then((res) => console.log(res));
//     } else {
//       alert("invalid input");
//     }
//   };
//   // const   isValid = true;
//   // if (typeof user.password !== undefined && typeof user.confirm_password !== undefined) {
          
//   //   if ( user.password != user.confirm_password ) {
//   //     isValid = false,
//   //     //  errors password = "Passwords don't match.";
//   //   }
//   // } 
//   // const PassConfirm = () =>{
//   //     const   isValid = true;
//   //  if (typeof user.password !== undefined && typeof user.confirm_password !== undefined) {
          
//   //    if ( user.password != user.confirm_password ) {
//   //      isValid = false,
//   //   errors password = "Passwords don't match.";
//   //    }
//   //  } 
//   // }
// // const testRedux = () =>{
// //   console.log(store.dispatch({
// //     type: "ADD_DETAILS",
// //     payload: { 
// //       email: user.email,
// //       password: user.password,
// //     },
// //   }))
// // }
// // testRedux()
//   return (
//     <>
//       <div class="form_re">
//         <div className="title">
//           <h1 className="text-3xl">Sign Up with myITreturn</h1>
//         </div>
//         <div className="fb_login">
//           <div className="fb">
//             <Facebook />
//           </div>
//           <div className="ggl">
//             <MyGoolgeLogin />
//           </div>
//         </div>
//         <hr className="hr1"/>
//         <hr className="hr2"/>
//         <p className="OR_P">OR</p>
//                 <div class="Reg_1">
//           <form action="#">
//             <input
//               type="text"
//               id="create-account-pseudo"
//               className="int_1"
//               name="email"
//               value={user.email}
//               onChange={handleChange}
//               placeholder="Email*"
//             />
//             <br />
//             <input
//               type="text"
//               id="create-account-pseudo"
//               className="int_1"
//               name="password"
//               value={user.password}
//               onChange={handleChange}
//               placeholder="Password*"
//             />
//             <br />
            // {/* <input
            //   type="password"
            //   id="create-account-pseudo"
            //   className="int_1"
            //   name="confirm_password"
            //   // value={user.password}
            //   // onChange={handleChange}
            //   value={user.confirm_password}
            //   onChange={handleChange}
            //   placeholder="Confirm Password*"
            // /> */}
    
//             <LoadCanvasTemplate />
//             <input
//               className="int_2"
//               id="inp"
//               ref={
// //                 (e)=>{
// // e.preventDefault()
// //                 },
//                 captchaRef1}
            
           
//               placeholder="Enter above captcha code*"
//             /> 

//             <br />
//             <button
//               type="submit"
//               className="btn"
//               onClick={(register)}
//               // handleCaptcha1
//             >
//               AGREE AND CONTINUE
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Register;

