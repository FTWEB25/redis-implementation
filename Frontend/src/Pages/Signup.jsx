import React, { useState } from "react";
import styles from "./Signup.module.css";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const handleChange = (e) => {
    if (e.target.name == "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("image", formData.image);
    try {
      const response = await axios.post(
        "http://localhost:8080/users/register",
        formDataToSend,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log(response.data)
    } catch (error) {
      console.error(error.message)
    }
  };
  return (
    <>
      <div className={styles.formCont}>
        <h1>Signup</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleChange}/>
          <input type="email" name="email" onChange={handleChange} />
          <input type="password" name="password" onChange={handleChange}/>
          <input type="file" name="image" onChange={handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Signup;
