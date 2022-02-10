import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Navbar from "./components/homepage/Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";
import storage from "redux-persist/lib/storage";
import persistor from "./Store"



function App() {
  

//  const userDataFromStorage = storage.getItem("user_data")
//  ? JSON.parse(storage.getItem("user_data"))
//  : null;

//  const userDataFromStorage = localStorage.getItem("user_data")
//  ? JSON.parse(localStorage.getItem("user_data"))
//  : null;
//  console.log(storage)
// const userData = storage.getItem("user_data")
// console.log(persistor)
// const Data =  
// console.log(Data)

return (
    
    <div className="App">
    <Navbar/>
    <AllRoutes/>
        
    </div>
  );
}

export default App;
