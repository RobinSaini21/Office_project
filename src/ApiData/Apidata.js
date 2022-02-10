import React, { useEffect,useState } from 'react';
import axios from 'axios';

function Apidata() {

    const myApiData = () =>{
    axios.get("/userbasicdetails")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    }

// Apidata();
    // const [todos,setTodos]=useState() 
    // useEffect(()=>{ 
    // var request = new XMLHttpRequest(); 
    // request.onreadystatechange = function() { 
    // if (request.readyState == 4 && request.status == 200) { 
    // const response=JSON.parse(request.response) 
    // setTodos(response) 
    // } 
    // }; 
    // request.open('GET', "http://localhost:4000/Register", true); 
    // request.send(); 
    // },[]) 
    
    // useEffect(()=>{ 
    // console.log(todos) 
    // },[todos]) 

    useEffect(() =>{
        myApiData();
    })
  return <div>

  </div>;
}

export default Apidata;
