import React from 'react'
import App from './app';
import Image from 'next/image';
import styles from "@/styles/page.module.css"

const LoginForm = () => {
  return (
    <div className={styles.container}>
       <div className={styles.diagonalBackground}></div>
      <div className={styles.formContainer}>
      <h1 className={styles.loginTitle}>Login</h1>
      <div className={styles.inputContainer}>
        <input type="text" id="username" name="username" placeholder="Kullanıcı Adı" required />
      </div>
      <div className={styles.inputContainers}>
        <input type="password" id="password" name="password" placeholder="Şifre" required />
      </div>
      <button className={styles.loginButton} type="submit">LOGİN</button>
      <div className={styles.links}>
        <a href="#">Şifremi Unuttum</a> </div>
        <div className={styles.linkss}>
        <a href="#">Kayıt Ol</a>
      </div>
    </div>
    <div className={styles.imageContainer}>
    <Image src="/image.png" alt="Hamburger" width={300} height={400} />
  </div>
</div>
  );
};



export default LoginForm;
 