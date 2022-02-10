import React, { useState, useEffect } from "react";
import { Button, Form, FormField } from "grommet";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import axios from "axios";
const sitekey = "e76d04b5-85fd-4c27-b158-d521e16e1382";

export default function CaptchaTest() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);
  const { validation, setValidation } = useState(false);

  const handleVerificationSuccess = async response => {
    // console.log("server response:", response);
    var bodyFormData = new FormData();
    bodyFormData.set("secret", sitekey);
    bodyFormData.set("response", response);
    try {
      const { data } = await axios.post(
        "https://hcaptcha.com/siteverify",
        bodyFormData,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
    } catch (err) {
      console.log("error:", err);
    }
  };

  if (validation)
    return (
      <p>
        Submitted "{sent.username || "your data"}"
        <pre>{JSON.stringify(validation)}</pre>
      </p>
    );
  return (
    <Form
      value={{ username, password }}
      onSubmit={setSent}
      onChange={data => {
        if (data.password !== "password") setPassword(data.password);
        if (data.username !== username) {
          setUsername(data.username);
        }
      }}
    >
      {/* <FormField name="username" /> */}

      {/* <FormField type="password" name="password" /> */}

      <HCaptcha sitekey={sitekey} onVerify={handleVerificationSuccess} />
{/* 
      <Button
        disabled={!(username && password && validation)}
        plain={false}
        primary
        type="submit"
      >
        Submit
      </Button> */}
    </Form>
  );
};

// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha
// } from "react-simple-captcha";
// import { useEffect, useRef, useState } from "react";
// export default function CaptchaTest() {
//   const captchaRef1 = useRef(null);
//   const handleCaptcha1 = (e) => {
//     e.preventDefault();
//     const captcha = captchaRef1.current.value;
//     if (validateCaptcha(captcha)) {
//       alert("true");
//     } else {
//       alert("false");
//     }
//   };
//   useEffect((e) => {
//     // e.preventDefault();
//     loadCaptchaEnginge(7);
//   });
//   return (
//     <div className="App">
//       <div>
//         <LoadCanvasTemplate />
//         <input    id="create-account-pseudo" ref={captchaRef1} type="text" />
//         <br></br>
//         <button className="btn" onClick={handleCaptcha1}>Check</button>
//       </div>
//     </div>
//   );
// }

