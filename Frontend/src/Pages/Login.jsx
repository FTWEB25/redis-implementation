import React, { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const response=await axios.post("http://localhost:8080/users/login",formData)
      if(response.status===200){
         navigate("/movie")
      }
    } catch (error) {
      console.log(error.messgae)
    }
  }
  return (
    <>
      <div className={styles.formCont}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" name="email" onChange={handleChange} />
          <input type="password" name="password" onChange={handleChange} />
          <input type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </>
  );
}

export default Login;
