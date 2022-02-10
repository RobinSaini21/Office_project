import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import './FaceBook.css';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== "unknown") {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    }
  };

  componentClicked = () => {
    console.log("clicked");
  };

  render() {
    const { email, isLoggedIn, name, picture } = this.state;
    let fbContent;

    if (isLoggedIn) {
      fbContent = (
        <div
          style={{
             width: "50px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={picture} alt={name} />
          <h2>Welcome {name}</h2>
          Email: {email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId= {process.env.REACT_APP_FACEBOOK_API_URL}
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook"
          cssClass="btnFacebook"
          textButton = "&nbsp;&nbsp;Sign In with Facebook"   
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

