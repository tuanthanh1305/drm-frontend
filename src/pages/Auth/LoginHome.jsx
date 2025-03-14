"use client";
import React, { useState } from "react";
import styles from "../../css/Loginhome.module.css";

const LoginButton = ({ icon, text, isOpen, onClick }) => {
  return (
    <button
      className={styles.loginButton}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <img src={icon} className={styles.buttonIcon} alt="" />
      <span className={styles.buttonText}>{text}</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/e5bb481687d5d867c60b6f3e02600644c5cd35e6a8aef0c707a7af0f7cfae27f?placeholderIfAbsent=true"
        className={styles.dropdownArrow}
        alt=""
      />
    </button>
  );
};

const DropdownMenu = ({ isOpen, items }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdownMenu} role="menu">
      {items.map((item, index) => (
        <button key={index} className={styles.dropdownItem} role="menuitem">
          {item}
        </button>
      ))}
    </div>
  );
};

const NavigationDots = () => {
  return (
    <nav className={styles.navigation} aria-label="Page navigation">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/7db8ed638113fdbb5cdba62e9fc65defbb0b50f15968ea3ac9536b5ef43a1049?placeholderIfAbsent=true"
        className={styles.dot}
        alt=""
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/09287fc19e120ee4a363712e3804a9faed672fe3e0f0d9093818e02de60f9054?placeholderIfAbsent=true"
        className={styles.dot}
        alt=""
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/a694f4a022e8d77f1ea3b5a70d53ccf8d84c0a3f6435310f9f671e0c781d05ab?placeholderIfAbsent=true"
        className={styles.dot}
        alt=""
      />
    </nav>
  );
};

function HomeLogin() {
  const [dropdownFPT, setDropdownFPT] = useState(false);
  const [dropdownFEID, setDropdownFEID] = useState(false);

  const toggleDropdownFPT = () => {
    setDropdownFPT(!dropdownFPT);
    setDropdownFEID(false);
  };

  const toggleDropdownFEID = () => {
    setDropdownFEID(!dropdownFEID);
    setDropdownFPT(false);
  };

  const roles = [ "Sinh viên", "Phụ huynh"];

  return (
    <main className={styles.loginPage}>
      <div className={styles.container}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/5f48355d1fb3da4ab2f15ff0b4ece5376d11a2a6418b740be91cb1f6d4b7b3b6?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt="Background"
        />

        <header className={styles.header}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/672d2a29064aff4d5a1a4df0cc32ad6be3d6b69bf00ac51446344d8982747208?placeholderIfAbsent=true"
            className={styles.logo}
            alt="Logo"
          />

          <section className={styles.loginOptions}>
            <div className={styles.loginButtonContainer}>
              <LoginButton
                icon="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/47a7099d532459548526b495a9054a03b4360040e711f69508358c0b4b283314?placeholderIfAbsent=true"
                text="Login with @fpt.edu.vn"
                isOpen={dropdownFPT}
                onClick={toggleDropdownFPT}
              />
              <DropdownMenu isOpen={dropdownFPT} items={roles} />
            </div>

            <div className={styles.loginButtonContainer}>
              <LoginButton
                icon="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/31d7405b044503a0d9550c2c78af60704ce79381a261594abe4cba91765d9f3f?placeholderIfAbsent=true"
                text="Login with FEID"
                isOpen={dropdownFEID}
                onClick={toggleDropdownFEID}
              />
              <DropdownMenu isOpen={dropdownFEID} items={roles} />
            </div>

            <img
              src="https://cdn.builder.io/api/v1/image/assets/984f5f16093f404496efb89b97e969e5/86882b6373de1870ae2899e89e44e25871d7ba527481f52c91a88652d48f7eab?placeholderIfAbsent=true"
              className={styles.decorativeImage}
              alt=""
            />
          </section>
          <div className={styles.divider}></div>
        </header>
        <div className={styles.pageNavigation}>
          <button className={styles.pageButton}></button>
          <button className={styles.pageButton}></button>
        </div>

        <footer className={styles.footer}>
          <NavigationDots />
        </footer>
      </div>
    </main>
  );
}

export default HomeLogin;
