import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './FaceBook.css';
import axios from 'axios';
import { apigoogleregister, apiregister } from '../../services/AuthApi';


function MyGoolgeLogin() {
  const handleSuccess = res => {
    const accessToken = res.accessToken;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    const name = res.profileObj.name;
    // console.log(name);
    // console.log(email);
    // console.log(accessToken);
    // console.log(googleId);

    const Googleuser = { accessToken, email, googleId,name };
    apiregister(Googleuser)
    // if ( accessToken && email && googleId && name) {
    //   axios
    //     .post(process.env.REACT_APP_GOOGLE_REST_API_URL, Googleuser)
    //     .then((res) => console.log(res));
    // } else {
    //   alert("invalid input");
    // }
    
  };
  // console.log(process.env.REACT_APP_GOOGLE_API_URL)
    return <div>
    <GoogleLogin
        clientId= {process.env.REACT_APP_GOOGLE_API_URL}
        buttonText="Login with Google"
        autoLoad="true"
        onSuccess={handleSuccess}
        onFailure={handleSuccess}
        className="btnGoogle"
        textButton = "&nbsp;&nbsp;Sign In with Facebook" 
      >
    <span className='gl_text'>&nbsp;&nbsp;Sign In with Google</span> 
      </GoogleLogin>
    <h1></h1>
  </div>
}


export default MyGoolgeLogin;


//<meta name="google-signin-client_id" content="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com">