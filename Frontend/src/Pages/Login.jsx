import React from "react";
import styles from "./Signup.module.css";
function Login() {
  return (
    <>
      <div className={styles.formCont}>
        <h1>Login</h1>
        <form className={styles.form}>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Login;
