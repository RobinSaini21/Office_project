import axios from "axios";
import store from "../Store";
// const path = process.env.REACT_APP_REST_API_URL;
const path = process.env.REACT_APP_REGISTER_API_URL;
const path_2 = process.env.REACT_APP_GOOGLE_REST_API_URL; 
const path_basic = process.env.REACT_APP_BASICUSER_REST_API_URL;
// const AuthRoutes = {
// REGISTER: "register",  
// USERGOOGLELOGIN:  "Googleuser"
// }
// const Register = "register" ;


export const apiregister = async (data) =>{
    try {
     
    const res = await axios.post(path,data)
     console.log(res)
     const token = res
    //  store.dispatch({
    //     type: "SAVE_TOKEN",
    //     payload: { 
    //       token: token,
    //       // password: values.password,
    //     },
    //   })
    return res
    } catch (err){
        return null
    }
}

export const apigoogleregister = async (data) =>{
    try {
    const res = await axios.post(path_2,data)
    return res
    } catch (err){
        return null
    }
}

export const basicuserdata = async (data) =>{
    try {
        const res = await axios.post(path_basic,data)
        
         console.log(res)
        return res
        } catch (err){
            return null
        }
}
export const logindata = async (data) =>{
    try{
        const res = await axios.post(data)
        console.log(res)
        return res
    } catch (err){
        return null
    }
}


 //  if (Email && Password) {
      //    axios.post(process.env.REACT_APP_REGISTER_API_URL,ruser)
      //    //`${process.env.REACT_APP_REGISTER_API_URL}`,
      //      .then((res) => console.log(res));
      //  } else {
      //    alert("invalid input");
      //  }