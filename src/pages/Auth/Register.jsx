import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "../../css/Register.module.css";


const FormInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.formInput}
      aria-label={placeholder}
      disabled={disabled}
    />
  );
};

const SocialSignup = () => {
  return (
    <>
      <p className={styles.socialText}>
        Fast Signup With Your Favorite Social Profile
      </p>
      <div className={styles.socialIcons}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f2a5df6af477b8f488e6660d3f345419a2ead8eba8b1796aef0095e894726c?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Social Media Icon 1"
          className={styles.socialIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a881df476598d55c2f2261f776546eb2ce30a174f3e30da669e3b2dbf629bc88?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Social Media Icon 2"
          className={styles.socialIcon}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e28b24f039f3d4a4b88020bf7193375824f173d57ffb85377f966825337709?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Social Media Icon 3"
          className={styles.socialIcon}
        />
      </div>
    </>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Here you would typically make an API call to register the user
      // For example:
      // await registerUser(formData);

      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful registration, redirect to login
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.registrationSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/574eef191e6311f610bf830fb7102a4068aba5bd0e6800e03ce53027c58e80a7?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
          alt="Background"
          className={styles.backgroundImage}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.columns}>
            <div className={styles.imageColumn}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f5944cd2eff950debb548d75ec27dc29557b1eba7f3831a0fcd675473ab53d?placeholderIfAbsent=true&apiKey=984f5f16093f404496efb89b97e969e5"
                alt="Registration illustration"
                className={styles.illustration}
              />
            </div>
            <div className={styles.formColumn}>
              <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.formTitle}>Register</h1>
                <FormInput
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  disabled={isLoading}
                />
                <FormInput
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  disabled={isLoading}
                />
                <FormInput
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  disabled={isLoading}
                />
                <FormInput
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange("confirmPassword")}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={styles.registerButton}
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
                <SocialSignup />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
